<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                "first_name" => "Reno Angelo",
                "middle_name" => "Dacpano",
                "last_name" => "Banderlipe",
                "email" => "reno@example.com",
                "password" => 'password'
            ],
            [
                "first_name" => "Kyren",
                "last_name" => "Cabellon",
                "email" => "kyren@example.com",
                "password" => 'password'
            ],
        ];

        foreach ($users as $userData) {
            User::create($userData);
        }
    }
}
