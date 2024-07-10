<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\IpLimit;
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

use App\Http\Controllers\HelloController; // Import the HelloController class
use App\Http\Controllers\MemberController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostManageController;
use App\Http\Controllers\AvatarController;
use App\Http\Controllers\UpDownController;

Route::get('hello',[HelloController::class,'index']);
Route::get('users',[UserController::class,'index']);
Route::get('posts', [PostController::class, 'index']);

Route::get('login', function () {
    return 'ログイン画面';
})->name('login');

Route::get('/backend/test', function () {
    return view('backend.test.index');
})->name('backend.test');

Route::get('/frontend/test', function () {
    return view('frontend.test.index');
})->name('frontend.test');


Route::get('/algorithm/bubblesort', function () {
    return view('algorithm.bubblesort');
})->name('algorithm.bubblesort');

Route::middleware('auth')->group(function(){
    Route::get('members',[MemberController::class, 'index']);
});

Route::get('members/posts', [PostManageController::class, 'index'])->name('posts.index');
Route::post('members/posts', [PostManageController::class, 'store'])->name('posts.store');
Route::get('members/posts/{post}/edit', [PostManageController::class, 'edit'])->name('posts.edit');
Route::put('members/posts/{post}', [PostManageController::class, 'update'])->name('posts.update');
Route::delete('members/posts/{post}', [PostManageController::class, 'destroy'])
    ->name('posts.destroy')
    ->middleware(IpLimit::class);

Route::get('avatar',[AvatarController::class,'index']);
Route::post('avatar',[AvatarController::class,'store']);

Route::get('updown',[UpDownController::class,'index']);
Route::post('updown',[UpDownController::class,'download']);


