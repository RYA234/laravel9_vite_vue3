<?php

namespace Tests\Feature\Models;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Post;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PostTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_PostのbelongsTo()
    {
        $post = Post::factory()->create();
        $instance = $post->user();
        $this->assertInstanceOf(BelongsTo::class, $instance);
    }
}
