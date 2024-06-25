<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    protected function setUp(): void{
        parent::setUp();
        dump('setUp');
    }

    protected function tearDown():void{
        parent::tearDown();
        dump('tearDown');
    }

    public function test_sample1(): void
    {
        $response = $this->get('/');

        dump('sample1');

        $response->assertStatus(200);
    }
}
