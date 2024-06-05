<?php

namespace App\Actions;

use Exception;
use ZipArchive;
use Illuminate\Support\Facades\Storage;

class ZipCsvAction
{
    public function execute(array $files)
    {
        $zipFilename = 'processed_data_' . now()->timestamp . '.zip';
        $zipFilePath = Storage::path('app/public/' . $zipFilename);

        $zip = new ZipArchive();

        if ($zip->open($zipFilePath, ZipArchive::CREATE | ZipArchive::OVERWRITE) === TRUE) {
            foreach ($files as $file) {
                $fileBasename = basename($file);
                $zip->addFile($file, $fileBasename);
            }
            $zip->close();
        } else {
            throw new Exception("Could not create zip file.", 500);
        }

        return $zipFilename;
    }
}
