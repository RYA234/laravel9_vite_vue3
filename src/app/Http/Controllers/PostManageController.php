<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostManageController extends Controller
{
    public function index(){
        $posts = auth()->user()->posts;
        return view('members.posts.index',compact('posts'));
    }


}
