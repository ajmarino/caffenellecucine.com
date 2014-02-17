<div class="menu-side col-sm-3">
	<nav>
		@foreach ($categories as $category)
			<a class="{{ Request::path() == $category->url ? 'active' : '' }}" href="/{{ $category->url }}">{{ $category->name }}</a>
		@endforeach
	</nav>

	<div class="catering">
		<p>Caffe Nelle Cucine is available for all sorts of catering functions: breakfast, lunch, special order cakes and pastries.</p>
		<p>Let us cater you next office party, birthday, communion, baptism, graduation or any othersocial gathering</p>
		<p>Please fill out a bakery <a href="baker_order_form.pff">order form</a>.</p>
	</div>
</div>