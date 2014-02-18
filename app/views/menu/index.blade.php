@extends('layouts.master')

@section('content')
	<div class="page-header">
		<h1>{{ $page['title'] }}</h1>
	</div>

	<div class="row">
		@include('menu/_side')



		<div class="meun-items col-sm-9">
			@foreach ($page['sections'] as $section)
				<section class="menu-sub-section">
					<h2>{{ $section->name }}</h2>

					<ul>
						@foreach ($page['items'] as $item)
							@if ($item->section_id == $section->id)
								<li>
									<h4>{{ $item->name }}</h4>
									<p>{{ $item->desc }}</p>
									<div class="prices">
										<span class="small">${{ $item->sml_price }}</span>

										@if ($item->lrg_price != 0)
											/ <span class="large">${{ $item->lrg_price }}</span>
										@endif
									</div>
								</li>
							@endif
						@endforeach
					</ul>
				</section>
			@endforeach
		</div>
	</div>
@stop