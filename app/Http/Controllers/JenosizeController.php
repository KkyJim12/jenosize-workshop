<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class JenosizeController extends Controller
{
    public function FindPlace(Request $request)
    {
        $search = $request->get('search');
        $response = Http::get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.894275,100.516303&radius=1500&type=restaurant&keyword=' . $search . '&key=AIzaSyAhed0HbWB8GwMMy-b9Ghs288hKPuIlS4Y');
        return response()->json(['status' => '200', 'data' => $response->body()], 200);
    }
}
