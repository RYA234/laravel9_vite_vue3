<?php

namespace Tests\Feature\Models;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Post;
use Illuminate\Database\Eloquent\Collection;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_Userへのあいさつ文()
    {
        $user = User::factory()->create(['name' => '弥太郎']);
        $sentence = $user->greeting();
        $this->assertSame('弥太郎さん、こんにちわ', $sentence);
    }

    public function test_UserのhasManyPosts(){
        $user = User::factory()->create();
        $post = Post::factory()->for($user)->create();
        $this->assertInstanceOf(Collection::class, $user->posts);

    }
}
