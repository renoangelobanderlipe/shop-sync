<?php

namespace App\Http\Controllers\DataMapper;

use stdClass;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Spatie\SimpleExcel\SimpleExcelReader;
use App\Services\DataMapper\DataMapperService;
use App\Http\Requests\DataMapper\UploadDataMapperRequest;
use App\Mail\DataMapperMail;
use Spatie\SimpleExcel\SimpleExcelWriter;

class DataMapperController extends Controller
{
    public function __construct(public DataMapperService $dataMapperService)
    {
    }

    public function upload(UploadDataMapperRequest $request)
    {
        try {
            $uploadedFile = $request->file('file');
            $recipient = $request->email;
            $rowsToExport = $request->limit ?? 100;
            $data = [];

            $fieldMapping = $request->fields;

            if (!$uploadedFile->isValid()) {
                return $this->respondError("Invalid file upload.", 400); // Bad Request
            }

            $filename = uniqid() . '.' . $uploadedFile->getClientOriginalExtension();

            $path = $uploadedFile->storeAs('app/public/', $filename);

            $rows = SimpleExcelReader::create(Storage::path($path))
                ->getRows()
                ->take($rowsToExport);

            foreach ($rows as $row) {
                $obj = new stdClass();
                foreach ($fieldMapping as $leftField => $rightField) {
                    $obj->{$leftField} = $row[$rightField] ?? null;
                }
                $data[] = $obj;
            }

            $newFilename = 'processed_data_' . now()->timestamp . '.csv';

            $writer = SimpleExcelWriter::create(Storage::path('app/public/' . $newFilename));

            foreach ($data as $row) {
                $writer->addRow((array) $row);
            }

            activity()
                ->causedBy(auth()->user())
                ->log('File uploaded and processed successfully. New file: ' . $newFilename);


            $content = new DataMapperMail(
                $data,
                Storage::path('app/public/' . $newFilename)
            );

            Mail::to($recipient)
                ->send($content);

            return $this->respondOk('File processed successfully, please check your email');

            // return $this->dataMapperService->uploadFile(DataMapperDTO::uploadFromApi($request));
        } catch (\Throwable $throwable) {
            activity()
                ->causedBy(auth()->user())
                ->log('File upload or processing failed: ' . $throwable->getMessage());

            \Log::error('File upload failed', ['error' => $throwable]);
            return $this->respondError("Something Wen't Wrong");
        }
    }
}
