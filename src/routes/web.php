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

use App\Http\Controllers\HelloController; // Import the HelloController class
use App\Http\Controllers\MemberController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostManageController;

Route::get('hello',[HelloController::class,'index']);
Route::get('users',[UserController::class,'index']);
Route::get('posts', [PostController::class, 'index']);

Route::get('login', function () {
    return 'ログイン画面';
})->name('login');

Route::middleware('auth')->group(function(){
    Route::get('members',[MemberController::class, 'index']);
});

Route::get('members/posts', [PostManageController::class, 'index'])->name('posts.index');
Route::post('members/posts', [PostManageController::class, 'store'])->name('posts.store');
Route::get('members/posts/{post}/edit', [PostManageController::class, 'edit'])->name('posts.edit');
Route::put('members/posts/{post}', [PostManageController::class, 'update'])->name('posts.update');
Route::delete('members/posts/{post}', [PostManageController::class, 'destroy'])->name('posts.destroy');
