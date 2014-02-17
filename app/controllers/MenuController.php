<?php

class MenuController extends BaseController {

	public function showCoffee() {
		$title = "Coffee";
		$categories = Category::all();

		return View::make('menu.index')
					->with('title', $title)
					->with('categories', $categories);
	}
	
	public function showBreakfast() {
		$title = "Breakfast";
		$categories = Category::all();

		return View::make('menu.index')
					->with('title', $title)
					->with('categories', $categories);
	}
	
	public function showLunch() {
		$title = "Lunch";
		$categories = Category::all();

		return View::make('menu.index')
					->with('title', $title)
					->with('categories', $categories);
	}
	
	public function showBakery() {
		$title = "Bakery";
		$categories = Category::all();

		return View::make('menu.index')
					->with('title', $title)
					->with('categories', $categories);
	}
	
	public function showBreads() {
		$title = "Breads";
		$categories = Category::all();

		return View::make('menu.index')
					->with('title', $title)
					->with('categories', $categories);
	}
	
	public function showDeli() {
		$title = "Deli";
		$categories = Category::all();

		return View::make('menu.index')
					->with('title', $title)
					->with('categories', $categories);
	}

	public function showRavoli() {
		$title = "Ravoli";
		$categories = Category::all();

		return View::make('menu.index')
					->with('title', $title)
					->with('categories', $categories);
	}
}
