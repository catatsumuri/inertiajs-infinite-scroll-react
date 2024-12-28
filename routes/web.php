<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\LoadWhenVisibleController;
use App\Http\Controllers\MergingPropsController;
use App\Http\Controllers\PaginationDemoController;
use App\Http\Controllers\DemoController;
use App\Http\Controllers\PreserveUrlDemoController;
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
Route::get('/merging-props', MergingPropsController::class)->name('merging-props');
Route::match(['get', 'post'], '/partial-reload', [PartialReloadController::class, 'index'])
    ->name('partial-reload-index');


#Route::post('/partial-reload/data', [PartialReloadController::class, 'data'])->name('partial-reload-data');
#Route::get('/url',   [PreserveUrlDemoController::class, 'index'])->name('preserve-url-demo');
#Route::get('/url/1', [PreserveUrlDemoController::class, 'one'])->name('preserve-url-demo-1');
#Route::get('/pagination-demo', PaginationDemoController::class)->name('pagination-demo');
#Route::get('/pagination-demo-user', [PaginationDemoController::class, 'user'])->name('pagination-demo-user');
#Route::get('/demo', DemoController::class)->name('demo');

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
