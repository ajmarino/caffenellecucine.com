@extends('layouts.user');

@section('content')
	<div class="content-container">
		{{ Form::open( array('url' => 'login') ) }}
			<div class="container">
				<div class="content">
					<div class="box login">
						<fieldset class="box-body">
							<label for="username">Email</label>
							<input type="email" name="username" id="username" value="{{ Input::old('username') }}" placeholder="" >

							<label for="password">Password</label>
							<input type="password" name="password" id="password" placeholder="" >
						</fieldset>
						<div class="footer">
							<button type="submit" class="btn btn-large btn-inverse">Login</button>
						</div>
					</div>
				</div>
			</div>
		{{ Form::close() }}
	</div>
@stop