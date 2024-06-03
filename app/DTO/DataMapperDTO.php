<?php

namespace App\DTO;

use Illuminate\Http\Request;

class DataMapperDTO
{
    public function __construct(
        public array $fields,
        public int $limit,
        public string $email,
        public  $file,
    ) {
    }

    public static function uploadFromApi(Request $request)
    {
        $dataObj = new static(
            $request->fields,
            $request->limit,
            $request->email,
            $request->file('file'),
        );
    }
}
