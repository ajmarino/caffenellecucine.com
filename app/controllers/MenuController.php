<?php

class MenuController extends BaseController {

	public function showCoffee() {
		$title = "Coffee";

		return View::make('menu.index')
					->with('title', $title);
	}

}
