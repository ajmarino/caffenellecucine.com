<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddActiveColumnToMenu extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('items', function(Blueprint $table)
		{
			$table->boolean('active');
		});
		Schema::table('sections', function(Blueprint $table)
		{
			$table->boolean('active');
		});
		Schema::table('categories', function(Blueprint $table)
		{
			$table->boolean('active');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('items', function(Blueprint $table)
		{
			$table->dropColumn('active');
		});
		Schema::table('sections', function(Blueprint $table)
		{
			$table->dropColumn('active');
		});
		Schema::table('categories', function(Blueprint $table)
		{
			$table->dropColumn('active');
		});
	}

}
