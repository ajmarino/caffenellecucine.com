<?php

class Item extends Eloquent {
	protected $guarded = array();

	public static $rules = array();

	public function category() {
		return $this->hasOne('Category');
	}
}
