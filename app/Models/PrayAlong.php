<?php

namespace SocialPrayer\Models;

use Illuminate\Database\Eloquent\Model;

class PrayAlong extends Model {
	protected $table = 'pray_along';

	public function prayer() {
		return $this->belongsTo('SocialPrayer\Models\Prayer');
	}

	public function user() {
		return $this->belongsTo('SocialPrayer\Models\User');
	}

}
