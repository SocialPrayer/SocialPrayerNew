<?php

namespace SocialPrayer\Http\Controllers;

use Illuminate\Http\Request;
use \SocialPrayer\Models\User;
use \SocialPrayer\Models\UserProfile;

class UserProfileController extends Controller {
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index() {
		//
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create() {
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request) {
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show(Request $request) {
		$userProfile = UserProfile::where('user_id', $request->user()->id)->with('user')->get();
		return $userProfile;
		// return view('users/profile/show', array('userProfile' => $userProfile));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id) {
		$userProfile = UserProfile::where('user_id', $id)->first();
		return view('users/profile/edit', array('userProfile' => $userProfile));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id) {

		$user = User::find($id);
		$user->email = $request->email;
		$user->name = $request->name;
		$user->save();

		$userProfile = UserProfile::firstOrNew(['user_id' => $id]);
		$userProfile->email = $request->email;
		$userProfile->firstname = $request->name;
		$userProfile->lastname = $request->lastname;
		$userProfile->sex = $request->sex;
		$userProfile->religion = $request->religion;
		$userProfile->marital_status = $request->marital_status;
		$userProfile->spouse_name = $request->spouse_name;
		$userProfile->save();

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id) {
		//
	}
}
