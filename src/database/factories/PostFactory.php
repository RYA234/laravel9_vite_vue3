<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => User::factory(),  // ← ★ 今回のポイント
            'title' => fake()->realText(10),
            'body' => fake()->realText(20),
            'status' => 1,
        ];
    }

    public function random(){
        return $this->state(fn (array $attrs)=>[
            'status' => fake()->randomElement([1,1,1,1,0]),
        ]);
    }

    public function closed()
    {
        return $this->state(fn (array $attrs) => [
            'status' => 0,
        ]);
    }
}
