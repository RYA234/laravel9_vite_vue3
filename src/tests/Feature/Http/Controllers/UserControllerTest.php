<?php

namespace Tests\Feature\Http\Controllers;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_ユーザー一覧画面が表示できる()
    {
        $user = User::factory()->create((['name'=>'織田信長']));

        $response = $this->get('users');

        $response
            ->assertOk()
            ->assertSee('織田信長');
    }
}
