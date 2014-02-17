@extends('layouts.master')

@section('content')
	<div class="page-header">
		<h1>Home</h1>
	</div>

	<div class="row">
		<div id="home-carousel" class="carousel slide">
			<!-- <ol class="carousel-indicators">
				<li data-target="#home-carousel" data-slide="0" class="active"></li>
				<li data-target="#home-carousel" data-slide="1"></li>
				<li data-target="#home-carousel" data-slide="2"></li>
				<li data-target="#home-carousel" data-slide="3"></li>
				<li data-target="#home-carousel" data-slide="4"></li>
				<li data-target="#home-carousel" data-slide="5"></li>
			</ol> -->
			
			<div class="carousel-inner col-sm-6">
				<div class="item active">
					<img src="/img/slides/coffee-cookie.jpg" alt="">
				</div>
				<div class="item">
					<img src="/img/slides/bbq-chicken.jpg" alt="">
				</div>
				<div class="item">
					<img src="/img/slides/cupcakes.jpg" alt="">
				</div>
				<div class="item">
					<img src="/img/slides/display-case.jpg" alt="">
				</div>
				<div class="item">
					<img src="/img/slides/bagels.jpg" alt="">
				</div>
				<div class="item">
					<img src="/img/slides/cupcakes2.jpg" alt="">
				</div>
			</div>

			
			<!-- <a class="left carousel-control" href="#home-carousel" data-slide="prev">
				<i class="icon-angle-left"></i>
			</a>
			<a class="right carousel-control" href="#home-carousel" data-slide="next">
				<i class="icon-angle-right"></i>
			</a> -->
		</div>


		<div id="home-info" class="col-sm-6">
			<h3>&#187; Welcome to</h3>
			<h1>Caffe Nelle Cucine</h1>
			<p class="subhead">Blairstown's Best Cup of Coffee.</p>
			<p>Welcome to Caffe Nelle Cucine, Blairstown's premier coffee shop. Unlike most coffee shops that rush you through the line; we take the time to prepare our coffee and espresso only from fresh roasted beans using traditional Italian recipes and techniques.</p>
			<p>Choose from our extensive menu including freshly roasted American coffee, elegant espresso drinks, or any of our fresh baked Italian desserts and bread. In addition to coffee and desserts we now offer a light cafe lunch menu made with our fresh baked bread.
			<p>We invite you to come in and enjoy a great cup of coffee with family, friends, or maybe just a great book. </p>
		</div>

	</div>
@stop