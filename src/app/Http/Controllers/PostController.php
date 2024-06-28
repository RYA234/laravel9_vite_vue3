<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index(){
        $posts = Post::query()
        ->where('status',1)
        ->get();
        return view('posts.index',compact('posts'));
    }
}
