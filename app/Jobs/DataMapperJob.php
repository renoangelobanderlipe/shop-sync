<?php

namespace App\Jobs;

use App\Mail\DataMapperMail;
use App\Actions\ZipCsvAction;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Services\DataMapper\DataMapperService;

class DataMapperJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public string $email,
        public array $fields,
        public string $limit,
        public string $chunk,
        public string $storagePath
    ) {
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $files = DataMapperService::chunkCsvFile(
            $this->limit,
            $this->chunk,
            $this->storagePath,
            $this->fields
        );

        $fileName = (new ZipCsvAction)->execute($files);

        foreach ($files as $file) {
            Storage::delete($file);
        }

        // email the file
        Mail::to($this->email)
            ->send(
                new DataMapperMail(
                    Storage::path('app/public/' . $fileName),
                    $fileName
                )
            );
    }
}
