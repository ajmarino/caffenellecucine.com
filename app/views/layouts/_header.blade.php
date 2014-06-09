<header>
	
	<div class="menu-bar">
		<nav class="container">
			<a href="/" class="{{ Request::path() == '/' ? 'active' : '' }}">Home</a>
			<a href="/coffee" class="{{ Request::path() == 'coffee' ? 'active' : '' }}">Coffee Bar</a>
			<a href="/breakfast" class="{{ Request::path() == 'breakfast' ? 'active' : '' }}">Breakfast</a>
			<a href="/bakery" class="{{ Request::path() == 'bakery' ? 'active' : '' }}">Bakery</a>
			<a href="/lunch" class="{{ Request::path() == 'lunch' ? 'active' : '' }}">Lunch</a>
			<a href="/dinner" class="{{ Request::path() == 'dinner' ? 'active' : '' }}">Dinner</a>
			<a href="/catering" class="{{ Request::path() == 'catering' ? 'active' : '' }}">Catering</a>
			<a href="/contact" class="{{ Request::path() == 'contact' ? 'active' : '' }}">Contact</a>
			
			<!-- 
			@ if (Sentry::check())
				<li>{ { link_to_route('login', 'Log In') } }</li>
			@ endif
			-->
		</nav>

		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
			<img class="iconic iconic-fluid" data-src="/images/icons/menu.svg" alt="">
		</button>
	</div>

	<a href="/" class="logo">
		<img src="/images/logo.png" alt="">
	</a>

</header>