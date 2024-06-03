<?php

namespace App\Services\DataMapper;

use App\DTO\DataMapperDTO;

interface IDataMapperService
{
    public function uploadFile(DataMapperDTO $dataMapperDTO);
}
