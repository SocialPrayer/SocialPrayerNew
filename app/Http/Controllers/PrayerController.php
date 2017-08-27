<?php

namespace SocialPrayer\Http\Controllers;

use SocialPrayer\Models\Prayer;
use Illuminate\Http\Request;

class PrayerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $prayers = Prayer::orderBy('created_at', 'desc')
			->with('privacysetting')
			->with('user')
			->with('prayedalong')
			->whereIn('privacy_setting_id', [2, 3, 4])
			->orWhere(['user_id' => $request->user()->id, 'privacy_setting_id' => '1'])
			->get();

        return $prayers;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $prayer = new Prayer;
        $prayer->text = $request->newPrayer;
        $prayer->user_id = $request->user()->id;
        $prayer->privacy_setting_id = 1;
        $prayer->save();
        return 'Success';
    }

    /**
     * Display the specified resource.
     *
     * @param  \SocialPrayer\Models\Prayer  $prayer
     * @return \Illuminate\Http\Response
     */
    public function show(Prayer $prayer)
    {
        return $prayer;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \SocialPrayer\Models\Prayer  $prayer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Prayer $prayer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \SocialPrayer\Models\Prayer  $prayer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Prayer $prayer)
    {
        $prayer->delete();
    }
}
