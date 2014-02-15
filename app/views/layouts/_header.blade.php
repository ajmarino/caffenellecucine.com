<!-- Fixed navbar -->
<header class="navbar navbar-default navbar-fixed-top" role="navigation">

	<div class="container">
		
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<i class="fa fa-bars"></i>
			</button>
			<a class="navbar-brand" href="#">AJ Marino's Playground</a>
		</div>

		<nav class="collapse navbar-collapse">
			<ul class="nav navbar-nav">
				<li class="{{ Request::is('/') ? 'active' : '' }}"><a href="/">Home</a></li>
			</ul>
		</nav><!--/.nav-collapse -->

	</div>

</header>