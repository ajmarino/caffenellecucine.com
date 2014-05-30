<!DOCTYPE html>
<html class="no-js">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Caffe Nelle Cucine | Style Guide</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Place favicon.ico and apple-touch-icon(s) in the root directory -->
	
	<link rel="stylesheet" href="/css/main.min.css">
		
</head>
<body>

	<div class="container">
		@include('layouts/_header')
		
		<section class="main-content">
			@yield('content')
		</section>
	
	
	</div>
	
	<script src="/js/vendor/jquery-2.1.1.min.js"></script>
	<script src="/js/vendor/bootstrap.min.js"></script>
	<script src="/js/app.min.js"></script>
</body>
</html>