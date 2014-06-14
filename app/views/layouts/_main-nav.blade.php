<nav class="header__nav" role="navigation">
	<a href="/" class="{{ Request::path() == '/' ? 'active' : '' }}">Home</a>
	<a href="/breakfast" class="{{ Request::path() == 'breakfast' ? 'active' : '' }}">Breakfast</a>
	<a href="/lunch" class="{{ Request::path() == 'lunch' ? 'active' : '' }}">Lunch</a>
	<a href="/dinner" class="{{ Request::path() == 'dinner' ? 'active' : '' }}">Dinner</a>
	<a href="/coffee" class="{{ Request::path() == 'coffee' ? 'active' : '' }}">Coffee Bar</a>
	<a href="/bakery" class="{{ Request::path() == 'bakery' ? 'active' : '' }}">Bakery</a>
	<a href="/catering" class="{{ Request::path() == 'catering' ? 'active' : '' }}">Catering</a>
	<a href="/contact" class="{{ Request::path() == 'contact' ? 'active' : '' }}">Contact</a>
	
	<!-- 
	@ if (Sentry::check())
		<li>{ { link_to_route('login', 'Log In') } }</li>
	@ endif
	-->
</nav>