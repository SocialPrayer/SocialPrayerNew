<?php

namespace SocialPrayer\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model {
	protected $fillable = [
		'firstname', 'lastname', 'email', 'user_id'
	];
	public function user() {
		return $this->belongsTo('SocialPrayer\Models\User');
	}
}
