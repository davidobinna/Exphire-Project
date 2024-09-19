<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;

//use Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */



    public function index()
    {
        //$posts = Post::latest()->paginate(5);
        //return inertia('Home', ['posts' => $posts]);
        return inertia('Signup');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'body' => ['required']
        ]);

        Post::create($data);
        return redirect('/');
      //  dd($request->all()); // This will dump the incoming request data to the screen
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
