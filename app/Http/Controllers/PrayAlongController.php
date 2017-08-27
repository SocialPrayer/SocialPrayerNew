<?php

namespace SocialPrayer\Http\Controllers;

use SocialPrayer\Models\PrayAlong;
use Illuminate\Http\Request;

class PrayAlongController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $prayalong = new PrayAlong;
		$prayalong->prayer_id = $request->prayer_id;
		$prayalong->user_id = $request->user()->id;
		$prayalong->prayed = 1;
		$prayalong->save();

        $prayers = PrayAlong::where('prayer_id', $request->prayer_id)->get();

        return $prayers;
    }

    /**
     * Display the specified resource.
     *
     * @param  \SocialPrayer\Models\PrayAlong  $prayAlong
     * @return \Illuminate\Http\Response
     */
    public function show(PrayAlong $prayAlong)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \SocialPrayer\Models\PrayAlong  $prayAlong
     * @return \Illuminate\Http\Response
     */
    public function edit(PrayAlong $prayAlong)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \SocialPrayer\Models\PrayAlong  $prayAlong
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PrayAlong $prayAlong)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \SocialPrayer\Models\PrayAlong  $prayAlong
     * @return \Illuminate\Http\Response
     */
    public function destroy(PrayAlong $prayAlong)
    {
        //
    }
}
