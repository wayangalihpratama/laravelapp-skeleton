<?php

declare(strict_types=1);

namespace App\Filament\Resources;

use App\Filament\Resources\AttractionResource\Pages;
use App\Models\Attraction;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class AttractionResource extends Resource
{
    protected static ?string $model = Attraction::class;

    protected static ?string $navigationIcon = 'heroicon-o-map-pin';

    protected static ?string $navigationGroup = 'Content';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('Basic Information')
                ->schema([
                    Forms\Components\TextInput::make('name')
                        ->required()
                        ->maxLength(255),
                    Forms\Components\TextInput::make('slug')
                        ->required()
                        ->maxLength(255)
                        ->unique(ignoreRecord: true),
                    Forms\Components\Select::make('category')
                        ->options([
                            'temple' => 'Temple',
                            'gallery' => 'Gallery',
                            'landmark' => 'Landmark',
                            'performance' => 'Performance',
                            'nature' => 'Nature',
                        ])
                        ->required(),
                    Forms\Components\Textarea::make('short_description')
                        ->maxLength(500)
                        ->columnSpanFull(),
                    Forms\Components\RichEditor::make('description')
                        ->required()
                        ->columnSpanFull(),
                ])->columns(2),

            Forms\Components\Section::make('Location & Details')
                ->schema([
                    Forms\Components\TextInput::make('latitude')
                        ->numeric()
                        ->step(0.00000001),
                    Forms\Components\TextInput::make('longitude')
                        ->numeric()
                        ->step(0.00000001),
                    Forms\Components\TextInput::make('opening_hours')
                        ->maxLength(255),
                    Forms\Components\TextInput::make('entrance_fee')
                        ->maxLength(255),
                    Forms\Components\Textarea::make('visitor_tips')
                        ->columnSpanFull(),
                ])->columns(2),

            Forms\Components\Section::make('Media & SEO')
                ->schema([
                    Forms\Components\FileUpload::make('featured_image')
                        ->image()
                        ->directory('attractions'),
                    Forms\Components\TextInput::make('meta_title')
                        ->maxLength(70),
                    Forms\Components\TextInput::make('meta_description')
                        ->maxLength(160),
                ])->columns(2),

            Forms\Components\Section::make('Status')
                ->schema([
                    Forms\Components\Toggle::make('is_featured')
                        ->label('Featured on homepage'),
                    Forms\Components\Select::make('status')
                        ->options([
                            'draft' => 'Draft',
                            'published' => 'Published',
                        ])
                        ->required()
                        ->default('draft'),
                ])->columns(2),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('featured_image')
                    ->circular(),
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\BadgeColumn::make('category')
                    ->colors([
                        'success' => 'temple',
                        'warning' => 'gallery',
                        'primary' => 'landmark',
                        'info' => 'performance',
                        'secondary' => 'nature',
                    ]),
                Tables\Columns\IconColumn::make('is_featured')
                    ->boolean(),
                Tables\Columns\BadgeColumn::make('status')
                    ->colors([
                        'warning' => 'draft',
                        'success' => 'published',
                    ]),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->options([
                        'temple' => 'Temple',
                        'gallery' => 'Gallery',
                        'landmark' => 'Landmark',
                        'performance' => 'Performance',
                        'nature' => 'Nature',
                    ]),
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'published' => 'Published',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAttractions::route('/'),
            'create' => Pages\CreateAttraction::route('/create'),
            'edit' => Pages\EditAttraction::route('/{record}/edit'),
        ];
    }
}
