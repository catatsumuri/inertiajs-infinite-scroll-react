<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Blog;
use App\Models\Category;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $category = Category::first();
        $user     = User::first();

        return [
            'title'       => $this->faker->sentence,
            'content'     => $this->faker->paragraph,
            'category_id' => $category ? $category->id : Category::factory(),
            'author_id'   => $user ? $user->id : User::factory(),
        ];
    }

}
