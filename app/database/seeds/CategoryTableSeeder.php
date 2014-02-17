<?php

class CategoryTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		// DB::table('category')->truncate();

		$category = array(
			["name" => "Coffee Bar", "url" => "coffee"],
			["name" => "Breakfast", "url" => "breakfast"],
			["name" => "Lunch", "url" => "lunch"],
			["name" => "Bakery", "url" => "bakery"],
			["name" => "Breads", "url" => "breads"],
			["name" => "Deli", "url" => "deli"],
			["name" => "Ravoli", "url" => "ravoli"],
			["name" => "Catering", "url" => "catering"]
		);

		// Uncomment the below to run the seeder
		DB::table('category')->insert($category);
	}

}
