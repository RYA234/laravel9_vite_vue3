<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FirstTest extends TestCase
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

    function test_sample12(){
        $response = $this->get('/');
        $response->assertStatus(200)
                 ->assertSee('Laravel')
                 ->assertSee(['Laravel', 'Vite', 'Vue']);
                //  ->assertSee('<h1>Hello,権兵衛さん</h1>',false);

    }
}
