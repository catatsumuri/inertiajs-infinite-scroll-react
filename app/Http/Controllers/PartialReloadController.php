<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;

class PartialReloadController extends Controller
{
    /**
     * Show the PartialReload page with random users and a random message.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        // Initialize an empty users array.
        $users = [];

        // Check if the request contains 'data' parameter with the value 'User'.
        if ($request->data == 'User') {
            // Fetch 10 random users and format their data.
            $users = User::inRandomOrder()->limit(10)->get()->map(function ($user) {
                return [
                    'id'         => $user->id,
                    'name'       => $user->name,
                    'email'      => $user->email,
                    'created_at' => $user->created_at->format('Y-m-d'),
                ];
            })->toArray();
        }

        // Return the Inertia page with a random message and users data.
        // The 'users' key uses lazy loading to defer fetching user data until it is explicitly requested.
        return Inertia::render('PartialReload', [
            'message' => fake()->sentence(), // Generate a random message.
            // 'users'   => $users, // Use this line for immediate loading (commented out for lazy loading).

            // Lazy load users data when explicitly needed.
            'users'   => Inertia::lazy(fn () => User::inRandomOrder()->limit(10)->get()->map(function ($user) {
                return [
                    'id'         => $user->id,
                    'name'       => $user->name,
                    'email'      => $user->email,
                    'created_at' => $user->created_at->format('Y-m-d'),
                ];
            })->toArray()),
        ]);
    }

    /**
     * This method is unused.
     * Fetch all user data.
     */
    /*
    public function data()
    {
        return User::all();
    }
    */
}
