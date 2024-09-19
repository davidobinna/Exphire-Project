<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function register(Request $request) {

         $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|number'
         ]);

         if($validator->fails()) {
            return back()->withErrors(['error' => $validator->errors()]);
         }

        $input['phone'] = (string) $request->get('phone');
        $input['name'] = (string) $request->get('name');
        $input['email'] = (string) $request->get('email');
        $user = User::create($input);

        try {
             Mail::send( );

        } catch (\Exception $e) {

        }
    }
}
