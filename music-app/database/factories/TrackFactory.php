<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Track>
 */
class TrackFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */


    public function definition ():array {
        return[
            'uuid' => 'trk-' . Str::uuid(),
            'title' => $this->faker->sentence(3),
            'artist' => $this->faker->name(),
            'image' => '',
            'music' => '',
            'display' => true,
            'play_count' => 0
        ];
    }
}
