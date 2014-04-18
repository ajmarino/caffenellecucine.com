<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'HomeController@showIndex');

Route::get('coffee', 'MenuController@showCoffee');
Route::get('breakfast', 'MenuController@showBreakfast');
Route::get('lunch', 'MenuController@showLunch');
Route::get('bakery', 'MenuController@showBakery');
Route::get('breads', 'MenuController@showBreads');
Route::get('deli', 'MenuController@showDeli');
Route::get('ravoli', 'MenuController@showRavoli');

Route::get('catering', 'CateringController@showIndex');

Route::get('contact', 'ContactController@showIndex');

Route::get('items', array('before' => 'auth', function () { }));

// Route::resource('items', 'ItemsController');

// Learning Laravel 4
Route::controller('pages');
Route::get('register', array('as' => 'postregister', 'uses' => 'pages@register'));
Route::get('myaccount', array('as' => 'myaccount', 'uses' => 'pages@myaccount'));

Route::post('register', array('as' => 'postregister', 'uses' => 'pages@register'));