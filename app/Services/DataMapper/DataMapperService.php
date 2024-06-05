<?php

namespace App\Services\DataMapper;

use Carbon\Carbon;
use App\Jobs\DataMapperJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Spatie\SimpleExcel\SimpleExcelReader;
use Spatie\SimpleExcel\SimpleExcelWriter;
use App\Actions\UploadFileFromRequestAction;
use Exception;

class DataMapperService implements IDataMapperService
{
    public function __construct(public UploadFileFromRequestAction $uploadFileFromRequestAction)
    {
    }

    public function uploadFile(Request $request)
    {
        $storagePath = $this->uploadFileFromRequestAction->execute($request);

        if ($request->chunk > $request->limit) {
            throw new Exception('Chunk size must be less than the limit');
        }

        self::dispatchDataMapperJob(
            $request->email,
            $request->fields,
            $request->limit,
            $request->chunk,
            $storagePath
        );
    }

    private function dispatchDataMapperJob(string $email, array $fields, string $limit, string $chunk, string $storagePath)
    {
        DataMapperJob::dispatch($email, $fields, $limit, $chunk, $storagePath);
    }

    public static function chunkCsvFile(
        string $limit,
        string $chunkSize,
        string $storagePath,
        array $fields
    ) {
        $reader = SimpleExcelReader::create($storagePath);
        $chunkFiles = [];

        // Apply Limit First
        $rowsToProcess = $reader->getRows()->take($limit);


        $headerRow = $rowsToProcess->first(); // Get the header row for validation

        $validFields = array_filter($fields, function ($rightField) use ($headerRow) {
            return isset($headerRow[$rightField]);
        });

        // Then Chunk and Process
        $rowsToProcess->chunk($chunkSize)
            ->each(function ($chunk, $index) use ($validFields, &$chunkFiles) {
                $data = [];

                foreach ($chunk as $row) {
                    if ($row !== null) {  // Check if $row is not null
                        $arrayRow = [];
                        foreach ($validFields as $leftField => $rightField) {
                            $arrayRow[$leftField] = $row[$rightField] ?? null;
                        }
                        $data[] = $arrayRow;
                    }
                }
                // Consistent Chunk File Naming
                $chunkFilename = "batch_{$index}_" . Carbon::now('Asia/Manila')->format('YmdHis') . ".csv";
                $chunkFilePath = Storage::disk('public')->path($chunkFilename);

                $writer = SimpleExcelWriter::create($chunkFilePath);
                $writer->addRows($data);
                $chunkFiles[] = $chunkFilePath;
            });

        return $chunkFiles;
    }
}
