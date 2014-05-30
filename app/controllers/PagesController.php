<?php

class PagesController extends Controller {

	function register()
	{
		if ( Sentry::check() ) {
			return Redirect::to('/admin/myaccount')
		}

		$rules = array(
			'email'                 => 'required|email|unique:users',
			'password'              => 'required|confirmed',
			'password_confirmation' => 'required'
		);

		$input = Input::get();
		$validation = Validator::make($input, $rules);

		if ( $validation->fails() ) {
			return Redirect::to('register')
							->with_input()
							->with_errors($validation);
		}

		$user = Sentry::createUser(array(
				'email'    => Input::get('email'),
				'password' => Input::get('password'),
				'metadata' => array(
					'first_name' => Input::get('first_name'),
					'last_name'  => Input::get('last_name')
				)
			));

		Mail::send('emails.welcome', $data, function ($message)	{
			$message->to(Input::get('email'))
					->subject('Welcome to Caffe Nelle Cucine');
		});
	}


	public function getLogin()
	{
		if ( Sentry::check() ) {
			return Redirect::to('')
		}

		return View::make("admin.login")
					->with("title", "Admin Login")
					->with("page_title", "Login")
					->with('class', 'login');
	}

	

	public function postLogin()
	{
		$rules = array(
			'email'    => 'required|email',
			'password' => 'required'
		);
		$input = Input::get();
		$validation = Validator::make($input, $rules);

		if ( $validation->fails() ) {
			return Redirect::to_route('userLogin')
							->with_errors($validation->errors)
							->with_input();
		}

		$credentials = array(
			'email'    => Input::get('email'),
			'password' => Input::get('password')
		);

		if ( Sentry::authenticate($credentials, false) ) {
			return Redirect::('myaccount')
		} else {
			return Redirect::to('login')
							->with("error", "There is a problem with your credentials. Please try again.");
		}
	}


	public function getMyaccount()
	{
		if ( !Sentry::check() ) {
			return Redirect::to('login')
							->with("error", "Please login to access your account.");
		}

		$user = Sentry::getUser();

		return View::make('pages.myaccount')
					->with("title", "Admin | My Account")
					->with('class', 'myaccount');
	}

}