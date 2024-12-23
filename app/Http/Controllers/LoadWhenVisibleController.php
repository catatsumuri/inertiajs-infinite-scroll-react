<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class LoadWhenVisibleController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $text = fake()->realText(2000);
        return Inertia::render('LoadWhenVisible', [
            'text'  => $text,
            'users' => Inertia::optional(fn() => $this->getUsers()),
        ]);
    }

    public function getUsers(): Collection
    {
        sleep(2);
        return User::all();
    }
}
