<?php

class Section extends \Eloquent {
	protected $guarded = array();

	public static $rules = array();

	protected $fillable = [];

	public function category()
    {
        return $this->hasOne('Category');
    }
}