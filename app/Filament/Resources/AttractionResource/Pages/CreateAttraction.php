<?php

declare(strict_types=1);

namespace App\Filament\Resources\AttractionResource\Pages;

use App\Filament\Resources\AttractionResource;
use Filament\Resources\Pages\CreateRecord;

class CreateAttraction extends CreateRecord
{
    protected static string $resource = AttractionResource::class;
}
