<?php
	
return array(
	
	/**
	 * Model title
	 *
	 * @type string
	 */
	'title' => 'Menu',


	/**
	 * The singular name of your model
	 *
	 * @type string
	 */
	'single' => 'item',


	/**
	 * The class name of the Eloquent model that this config represents
	 *
	 * @type string
	 */
	'model' => 'Item',


	/**
	 * The columns array
	 *
	 * @type array
	 */
	'columns' => array(
		'id',
		'name',
		'desc',
		'sml_price' => array(
			'title' => 'Small Price',
			'output' => '$(:value)',
		),
		'lrg_price' => array(
			'title' => 'Large Price',
			'output' => '$(:value)',
		),
	),


	/**
	 * The edit fields array
	 *
	 * @type array
	 */
	'edit_fields' => array(
		'name' => array(
			'title' => 'Name',
		),
	),
);