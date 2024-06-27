<?php

namespace Tests\Feature\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class MemberControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_非ログイン時には、ログイン画面に飛ばされる(){
        $response = $this->get('members');
        $response->assertRedirect('login');
    }

    public function test_ログイン時、あいさつ文が表示される(){
        $user = User::factory()->make(['name' => '与太郎']);
        $response = $this
            ->actingAs($user)
            ->get('members');

        $response
        ->assertOk()
        ->assertSee('ようこそ与太郎さん');
    }
}
