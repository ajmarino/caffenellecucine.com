<?php

class MenuController extends BaseController {

	/**
	 * Gets associated menu items depending on url passed in
	 * @param  string $category - url of menu section to load
	 */
	private function getMenu($category) {
		$page = array();
		
		// Retrieves all menu sections
		$categories = DB::table('categories')
						->orderBy('order')
						->get();
		

		// Gets category object based on url passed in
		$type = DB::table('categories')
							->where('url', '=', $category)
							->first();

		// Sets page title to Category name
		$title = $type->name;

		// Gets all sub sections of category
		$sections = DB::table('sections')
						->where('category_id', '=', $type->id)
						->get();

		// Gets all items for category
		$items = DB::table('items')
					->where('category_id', '=', $type->id)
					->get();


		//  Builds Page 
		$page['title']      = $title;
		$page['categories'] = $categories;
		$page['sections']   = $sections;
		$page['items']      = $items;

		return $page;
	}


	/**
	 * Coffee Menu
	 */
	public function showCoffee() {
		$page = $this->getMenu("coffee");

		return View::make('menu.index')
					->with('page', $page);
	}
	

	/**
	 * Breakfast Menu
	 */
	public function showBreakfast() {
		$page = $this->getMenu("breakfast");

		return View::make('menu.index')
					->with('page', $page);
	}
	

	/**
	 * Lunch Menu
	 */
	public function showLunch() {
		$page = $this->getMenu("lunch");

		return View::make('menu.index')
					->with('page', $page);
	}
	

	/**
	 * Bakery Menu
	 */
	public function showBakery() {
		$page = $this->getMenu("bakery");

		return View::make('menu.index')
					->with('page', $page);
	}
	

	/**
	 * Breads Menu
	 */
	public function showBreads() {
		$page = $this->getMenu("breads");

		return View::make('menu.index')
					->with('page', $page);
	}
	

	/**
	 * Deli Menu
	 */
	public function showDeli() {
		$page = $this->getMenu("deli");

		return View::make('menu.index')
					->with('page', $page);
	}


	/**
	 * Ravoli Menu
	 */
	public function showRavoli() {
		$page = $this->getMenu("ravoli");

		return View::make('menu.index')
					->with('page', $page);
	}
}
