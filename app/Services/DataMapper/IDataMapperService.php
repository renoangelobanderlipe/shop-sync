<?php

namespace App\Services\DataMapper;

use Illuminate\Http\Request;

interface IDataMapperService
{
    public function uploadFile(Request $request);
}
