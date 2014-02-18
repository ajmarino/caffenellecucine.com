<?php

class CategoryTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		DB::table('categories')->truncate();

		$category = array(
			["name" => "Bakery", "url" => "bakery", "order" => 4],
			["name" => "Breads", "url" => "breads", "order" => 5],
			["name" => "Breakfast", "url" => "breakfast", "order" => 2],
			["name" => "Catering", "url" => "catering", "order" => ""],
			["name" => "Coffee Bar", "url" => "coffee", "order" => 1],
			["name" => "Deli", "url" => "deli", "order" => 6],
			["name" => "Lunch", "url" => "lunch", "order" => 3],
			["name" => "Ravoli", "url" => "ravoli", "order" => 7]
		);

		// Uncomment the below to run the seeder
		DB::table('categories')->insert($category);
	}

}
