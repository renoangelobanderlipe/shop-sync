<?php

namespace App\Http\Controllers\DataMapper;

use App\Http\Controllers\Controller;
use App\Services\DataMapper\DataMapperService;
use App\Http\Requests\DataMapper\UploadDataMapperRequest;

class DataMapperController extends Controller
{
    public function upload(UploadDataMapperRequest $request, DataMapperService $service)
    {
        try {
            $service->uploadFile($request);

            return $this->respondOk('File processed. Check your email shortly.');
        } catch (\Throwable $throwable) {
            activity()
                ->causedBy(auth()->user())
                ->log('File upload or processing failed: ' . $throwable->getMessage());

            return $this->respondError($throwable->getMessage());
        }
    }
}
