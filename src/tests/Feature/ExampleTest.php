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

        dump(config('session.lifetime'));   // 現在のセッション時間を出力
        config(['session.lifetime' => 10]); // セッション時間を10分に変更
        dump(config('session.lifetime'));   // 変更後のセッション時間を出力

        $response->assertStatus(200);
    }

    public function test_sample2(): void
    {
        $response = $this->get('/');

        dump(config('session.lifetime'));  // 現在のセッション時間を出力

        $response->assertStatus(200);
    }

    function test_tdd()
    {
        $response = $this->get('hello');
        $response->assertStatus(200);
        $response->assertSee('world');
    }
}
