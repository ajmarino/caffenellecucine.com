<header class="masthead clearfix">
	<a href="/" class="logo">
		<img src="/img/logo.png" alt="">
	</a>
	
	<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
		<i class="fa fa-bars"></i>
	</button>
	
	<ul class="nav nav-justified navbar-collapse collapse">
		<li class="{{ Request::path() == '/' ? 'active' : '' }}">
			<a href="/">Home</a>
		</li>
		<li class="{{ Request::path() == 'coffee' ? 'active' : '' }}">
			<a href="/coffee">Coffee Bar</a>
		</li>
		<li class="{{ Request::path() == 'breakfast' ? 'active' : '' }}">
			<a href="/breakfast">Breakfast</a>
		</li>
		<li class="{{ Request::path() == 'bakery' ? 'active' : '' }}">
			<a href="/bakery">Bakery</a>
		</li>
		<li class="{{ Request::path() == 'lunch' ? 'active' : '' }}">
			<a href="/lunch">Lunch</a>
		</li>
		<li class="{{ Request::path() == 'dinner' ? 'active' : '' }}">
			<a href="/dinner">Dinner</a>
		</li>
		<li class="{{ Request::path() == 'catering' ? 'active' : '' }}">
			<a href="/catering">Catering</a>
		</li>
		<li class="{{ Request::path() == 'contact' ? 'active' : '' }}">
			<a href="/contact">Contact</a>
		</li>
		
		<!-- 
		@ if (Sentry::check())
			<li>{ { link_to_route('login', 'Log In') } }</li>
		@ endif
		-->
	</ul>
	
</header>