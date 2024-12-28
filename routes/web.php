<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\LoadWhenVisibleController;
use App\Http\Controllers\PartialReloadController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/load-when-visible', LoadWhenVisibleController::class)->name('load-when-visible');
#Route::get('/partial-reload', [PartialReloadController::class, 'index'])->name('partial-reload-index');
Route::match(['get', 'post'], '/partial-reload', [PartialReloadController::class, 'index'])
    ->name('partial-reload-index');
Route::post('/partial-reload/data', [PartialReloadController::class, 'data'])->name('partial-reload-data');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('blogs', BlogController::class);
});

require __DIR__.'/auth.php';
