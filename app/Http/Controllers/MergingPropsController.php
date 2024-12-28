<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MergingPropsController extends Controller
{
    /**
     * Handle the incoming request.
     * This method handles rendering the MergingProps page with paginated user data.
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        // Retrieve a paginated list of users, 10 per page.
        $users = User::paginate(10);

        // Render the MergingProps view with user data and pagination information.
        return Inertia::render('MergingProps', [
            // Use Inertia::merge() to add extra functionality or modify user data.
            'users'       => Inertia::merge($users->items()),

            // Pass the current page number to the frontend for pagination controls.
            'currentPage' => $users->currentPage(),
        ]);
    }
}
