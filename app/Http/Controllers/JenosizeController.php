<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class JenosizeController extends Controller
{
    public function FindPlace(Request $request)
    {
        $search = $request->get('search');
        $response = Http::get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.894016,100.5163&radius=1000&type=restaurant&keyword=' . $search . '&key=AIzaSyAhed0HbWB8GwMMy-b9Ghs288hKPuIlS4Y');
        return response()->json(['status' => '200', 'data' => $response->json()], 200);
    }

    public function Series(Request $request)
    {
        $order = [3, 5, 9, 15];
        $d1 = $order[1] - $order[0];
        $d2 = $order[2] - $order[1];
        $d3 = $d2 - $d1;
        $n = $request->get('order');
        $result = $order[0] + ($n - 1) * $d1 + (($n - 1) * ($n - 2) / 2) * $d3;
        return response()->json(['status' => '200', 'data' => $result]);
    }
}
