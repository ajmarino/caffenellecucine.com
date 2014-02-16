<header class="masthead clearfix">
	<a href="/" class="logo">
		<img src="/img/logo.png" alt="">
	</a>
	
	<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
		<i class="icon-reorder"></i>
	</button>
	
	<ul class="nav nav-justified navbar-collapse collapse">
		<li class="{{ Request::is('/') ? 'active' : '' }}">
			<a href="/">Home</a>
		</li>
		<li class="{{ Request::is('/coffee') ? 'active' : '' }}">
			<a href="/coffee">Coffee Bar</a>
		</li>
		<li class="{{ Request::is('/breakfast') ? 'active' : '' }}">
			<a href="/breakfast">Breakfast</a>
		</li>
		<li class="{{ Request::is('/bakery') ? 'active' : '' }}">
			<a href="/bakery">Bakery</a>
		</li>
		<li class="{{ Request::is('/lunch') ? 'active' : '' }}">
			<a href="/lunch">Lunch</a>
		</li>
		<li class="{{ Request::is('/catering') ? 'active' : '' }}">
			<a href="/catering">Catering</a>
		</li>
		<li class="{{ Request::is('/contact') ? 'active' : '' }}">
			<a href="/contact">Contact</a>
		</li>
	</ul>
	
</header>