<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ArtCultureController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\AttractionController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\VisitInfoController;

Route::get('/', HomeController::class)->name('home');
Route::get('/about', AboutController::class)->name('about');
Route::get('/attractions', [AttractionController::class, 'index'])->name('attractions.index');
Route::get('/attractions/{slug}', [AttractionController::class, 'show'])->name('attractions.show');
Route::get('/art-culture', ArtCultureController::class)->name('art-culture');
Route::get('/artists/{slug}', [ArtistController::class, 'show'])->name('artists.show');
Route::get('/visit', VisitInfoController::class)->name('visit');
Route::get('/gallery', GalleryController::class)->name('gallery');
Route::get('/events', EventController::class)->name('events');
Route::get('/contact', [ContactController::class, 'show'])->name('contact.show');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store')
    ->middleware('throttle:5,60');
