<!DOCTYPE html>
<html class="no-js">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Caffe Nelle Cucine | {{ Request::path() == "/" ? "Home" : Request::path() }}</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Place favicon.ico and apple-touch-icon(s) in the root directory -->
	
	<link rel="stylesheet" href="/css/bootstrap-3.1.0.min.css">
	<link rel="stylesheet" href="/css/font-awesome-4.0.3.min.css">
	@if ($app->env === "local")
		<link rel="stylesheet" href="/css/main.css">
	@else
		<link rel="stylesheet" href="/css/main.min.css">
	@endif
	
	<script src="/js/vendor/modernizr-2.7.1.min.js"></script>
</head>
<body>

	<div class="wrap">

		@include('layouts/_header')
		
		<div class="container">
			@yield('content')
		</div>


	</div>

	<footer>
		
		<div class="container">
			<p class="text-muted">Place sticky footer content here.</p>
		</div>

	</footer>

	<script src="/js/vendor/jquery-1.11.0.min.js"></script>
	<script src="/js/vendor/bootstrap.min.js"></script>
	<script src="/js/app.min.js"></script>

	<!-- Google Analytics: change UA-XXXXX-X to be your site's ID.
	<script>
		(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
		function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
		e=o.createElement(i);r=o.getElementsByTagName(i)[0];
		e.src='//www.google-analytics.com/analytics.js';
		r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
		ga('create','UA-XXXXX-X');ga('send','pageview');
	</script> -->
</body>
</html>