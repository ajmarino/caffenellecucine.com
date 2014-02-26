<?php

class ItemsTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		DB::table('items')->truncate();

		$items = array(
			["name" => "Drip Coffee", "desc" => "House Blend, Decaf, Dark Roast, Morning Blend, Flavor of the Day", "sml_price" => 1.75, "lrg_price" => 2.00, "category_id" => 5, "section_id" => 1],
			["name" => "Cappuccino", "desc" => "Frothed milk with espresso", "sml_price" => 3.25, "lrg_price" => 3.50, "category_id" => 5, "section_id" => 2],
			["name" => "Assorted Fresh Bagels", "desc" => "", "sml_price" => 1, "lrg_price" => "", "category_id" => 3, "section_id" => 3],
			["name" => "Italian Hero", "desc" => "prosciutto, sopressata, provolone cheese, baby arugula, hot or sweet peppers on a french bread", "sml_price" => 7.95, "lrg_price" => "", "category_id" => 7, "section_id" => 4]
		);

		// Uncomment the below to run the seeder
		DB::table('items')->insert($items);
	}

}
