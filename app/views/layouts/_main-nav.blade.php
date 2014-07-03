<nav class="header__nav" role="navigation">
	<a href="/" class="nav__link {{ Request::path() == '/' ? 'nav__link--active' : '' }}">Home</a>
	<a href="/coffee" class="nav__link {{ Request::path() == 'coffee' ? 'nav__link--active' : '' }}">Coffee Bar</a>
	<a href="/breakfast" class="nav__link {{ Request::path() == 'breakfast' ? 'nav__link--active' : '' }}">Breakfast</a>
	<a href="/lunch" class="nav__link {{ Request::path() == 'lunch' ? 'nav__link--active' : '' }}">Lunch</a>
	<a href="/dinner" class="nav__link {{ Request::path() == 'dinner' ? 'nav__link--active' : '' }}">Dinner</a>
	<!-- <a href="/bakery" class="nav__link {{ Request::path() == 'bakery' ? 'nav__link--active' : '' }}">Bakery</a> -->
	<a href="/catering" class="nav__link {{ Request::path() == 'catering' ? 'nav__link--active' : '' }}">Catering</a>
	<a href="/contact" class="nav__link {{ Request::path() == 'contact' ? 'nav__link--active' : '' }}">Contact</a>
	
	<!-- 
	@ if (Sentry::check())
		<li>{ { link_to_route('login', 'Log In') } }</li>
	@ endif
	-->
</nav>