@extends('layouts.user');

@section('inner-banner');
	<div class="inner-top">
		<div class="col-sm-6 inner-content">
			<h2>{{ $page_title }}</h2>
			<p>This is the sign up page.</p>
		</div>
		<img src="{{ URL::('public') }}/img/sources.png" alt="">
	</div>
@stop

@section('content')
	<div class="col-sm-12 dcontent">
		{{ Form::open( array('url' => 'register') ) }}
			<div class="control-group">
				<label for="first_name" class="control-label">First Name: </label>
				<div class="controls">
					<input type="text" name="first_name" class="col-sm-10" id="first_name" value="{{ Input::old('first_name') }}" placeholder="" >
				</div>
			</div>
			<div class="control-group">
				<label for="last_name" class="control-label">Last Name: </label>
				<div class="controls">
					<input type="text" name="last_name" class="col-sm-10" id="last_name" value="{{ Input::old('lasst_name') }}" placeholder="" >
				</div>
			</div>
			<div class="control-group">
				<label for="email" class="control-label">Email: </label>
				<div class="controls">
					<input type="email" name="email" class="col-sm-10" id="email" value="{{ Input::old('email') }}" placeholder="" >
				</div>
			</div>
			<div class="control-group">
				<label for="password" class="control-label">Password: </label>
				<div class="controls">
					<input type="password" name="password" class="col-sm-10" id="password" value="{{ Input::old('password') }}" placeholder="" >
				</div>
			</div>
			<div class="control-group">
				<label for="confirm-password" class="control-label">Confirm Password: </label>
				<div class="controls">
					<input type="password" name="confirm-password" class="col-sm-10" id="confirm-password" value="{{ Input::old('confirm-password') }}" placeholder="" >
				</div>
			</div>

			<button class="btn btn-large btn-success" type="submit"></button>
		{{ Form::close() }}
	</div>
@stop