<?php

namespace App\Http\Requests\DataMapper;

use App\Http\Requests\BaseFormRequest;

class UploadDataMapperRequest extends BaseFormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "file" => "required|file",
            "fields" => "required|array",
            "limit" => "required|integer",
            "email" => "required|email"
        ];
    }
}
