<!DOCTYPE html>
<html class="no-js">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Caffe Nelle Cucine | {{ Request::path() == "/" ? "Home" : Request::path() }}</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Place favicon.ico and apple-touch-icon(s) in the root directory -->
	
	@if ($app->env === "local")
		<link rel="stylesheet" href="/css/main.css">
	@else
		<link rel="stylesheet" href="/css/main.min.css">
	@endif
	
	<script src="/js/vendor/modernizr-2.7.1.min.js"></script>
</head>
<body @if ($app->env === 'local')class="dev"@endif>

	<div class="container">
		@include('layouts/_header');
		
		<section class="main-content">
			@yield('content')
		</section>
	
		@include('layouts/_footer')
	</div>
	
	@if ($app->env !== 'local')
		@include('layouts/_tracking')
	@endif

	<script src="/js/vendor/jquery-1.11.0.min.js"></script>
	<script src="/js/vendor/bootstrap.min.js"></script>
	<script src="/js/app.min.js"></script>
</body>
</html>