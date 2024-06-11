<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// docker起動時にRoutingが動作するか確認
Route::get('/greeting', function () {
    return 'hello';
});

// docker起動時にViewが動作するか確認
Route::get('/sample', function () {
    return view('sample');
});
