<?php

namespace SocialPrayer\Models;

use Illuminate\Database\Eloquent\Model;

class PrivacySetting extends Model {

	protected $table = 'privacy_settings';

	protected $fillable = [
		'name',
	];

	public function prayer() {

		return $this->hasMany('SocialPrayer\Models\Prayer');

	}

}
