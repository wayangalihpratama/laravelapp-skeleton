<?php

declare(strict_types=1);

namespace App\Filament\Resources;

use App\Filament\Resources\SiteSettingResource\Pages;
use App\Models\SiteSetting;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class SiteSettingResource extends Resource
{
    protected static ?string $model = SiteSetting::class;

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static ?string $navigationGroup = 'Settings';

    protected static ?int $navigationSort = 0;

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('key')
                ->required()
                ->maxLength(255)
                ->unique(ignoreRecord: true)
                ->disabled(fn (?SiteSetting $record) => $record !== null),
            Forms\Components\Select::make('group')
                ->options([
                    'general' => 'General',
                    'contact' => 'Contact',
                    'social' => 'Social',
                ])
                ->required()
                ->default('general'),
            Forms\Components\Textarea::make('value')
                ->columnSpanFull(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('key')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('value')->limit(60),
                Tables\Columns\BadgeColumn::make('group')
                    ->colors([
                        'primary' => 'general',
                        'info' => 'contact',
                        'warning' => 'social',
                    ]),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('group')
                    ->options(['general' => 'General', 'contact' => 'Contact', 'social' => 'Social']),
            ])
            ->actions([Tables\Actions\EditAction::make()])
            ->bulkActions([]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSiteSettings::route('/'),
            'create' => Pages\CreateSiteSetting::route('/create'),
            'edit' => Pages\EditSiteSetting::route('/{record}/edit'),
        ];
    }
}
