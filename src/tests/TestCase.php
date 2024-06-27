<?php

namespace Tests;

use Illuminate\Foundation\Console\CliDumper;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

use App\Models\User
abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    use RefreshDatabase;

    protected function dumpdb():void
    {
        if(class_exists(CliDumper::class)){
            CliDumper::resolveDumpSourceUsing(fn() => null);
        }

        foreach(Schema::getAllTables() as $table){
            if(isset($table->name)){
                $name = $table->name;
            }else{
                $table =(array) $table;
                $name = reset($table);
            }
            if(in_array($name,['migrations'],true)){
                continue;
            }
            $collection = DB::table($name)->get();
            if($collection -> isEmpty()){
                continue;
            }

            $data = $collection->map(function ($item){
                unset($item->created_at,$item->updated_at);
                return $item;
            })->toArray();
            dump(sprintf('■■■■■■■■■■■■■■■■■■■ %s %s件 ■■■■■■■■■■■■■■■■■■■', $name, $collection->count()));
            dump($data);
    }
    $this->assertTrue(true);
    }


    protected function dumpQuery():void
    {
        $db = $this->app->make('db');
        $db->enableQueryLog();

        $this->beforeApplicationDestroyed(function () use ($db){
            dump($db->getQueryLog());
        });
    }

    protected function login($user = null){
        $user ??= User::factory()->create();
        $this->actingAs($user);
        return $user;
    }
}

