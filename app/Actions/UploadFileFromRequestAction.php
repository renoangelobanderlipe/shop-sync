<?php

namespace App\Actions;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadFileFromRequestAction
{
    public function execute(Request $request)
    {
        $file = $request->file('file');

        // Checks if a valid file
        if (!$file->isValid()) {
            throw new Exception("Invalid file upload.", 400);
        }

        $filename = uniqid() . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('app/public/assets/', $filename);

        // returns the path
        return Storage::path($path);
    }
}
