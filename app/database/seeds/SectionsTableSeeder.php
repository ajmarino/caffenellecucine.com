<?php

class SectionsTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		DB::table('sections')->truncate();

		$sections = array(
			["category_id" => 5, "name" => "From the Coffee Bar"],
			["category_id" => 5, "name" => "Espresso Drinks"],
			["category_id" => 3, "name" => "Breakfast"],
			["category_id" => 7, "name" => "Signature Sandwiches"]
		);

		// Uncomment the below to run the seeder
		DB::table('sections')->insert($sections);
	}

}
