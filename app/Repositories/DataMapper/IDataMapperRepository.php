<?php

namespace App\Repositories\DataMapper;

use App\DTO\DataMapperDTO;

interface IDataMapperRepository
{
    public function uploadFile(DataMapperDTO $dataMapperDTO);
}
