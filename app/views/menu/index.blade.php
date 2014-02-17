@extends('layouts.master')

@section('content')
	<div class="page-header">
		<h1>{{ $title }}</h1>
	</div>

	<div class="row">
		@include('menu/_side')
	</div>
@stop