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
            "chunk" => "required|integer",
            "email" => "required|email"
        ];
    }

    public function messages()
    {
        return [
            "fields.*" => "The fields in Step 1 and 2 must not be empty"
        ];
    }
}
