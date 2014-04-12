<?php
	
return array(
	
	/**
	 * Model title
	 *
	 * @type string
	 */
	'title' => 'Categories',


	/**
	 * The singular name of your model
	 *
	 * @type string
	 */
	'single' => 'category',


	/**
	 * The class name of the Eloquent model that this config represents
	 *
	 * @type string
	 */
	'model' => 'Category',


	/**
	 * The columns array
	 *
	 * @type array
	 */
	'columns' => array(
		'id' => array(
			'title' => 'Id',
			'output' => '(:value)',
		),
		'name' => array(
			'title' => 'Name',
			'output' => '(:value)',
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