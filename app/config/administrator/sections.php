<?php
	
return array(
	
	/**
	 * Model title
	 *
	 * @type string
	 */
	'title' => 'Sections',


	/**
	 * The singular name of your model
	 *
	 * @type string
	 */
	'single' => 'section',


	/**
	 * The class name of the Eloquent model that this config represents
	 *
	 * @type string
	 */
	'model' => 'Section',


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
		'category' => array(
			'title' => 'Category',
			'select' => "(:value)",
		)
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