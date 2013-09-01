(function () {

}());

angular.module('Caffe', [])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				controller  : "HomeCtrl",
				templateUrl : "templates/pages/home.html"
			})
			.when('/coffeebar', {
				controller  : "CoffeeBarCtrl",
				templateUrl : "templates/pages/coffee-bar.html"
			})
			.when('/breakfast', {
				controller  : "BreakfastCtrl",
				templateUrl : "templates/pages/breakfast.html"
			})
			.when('/bakery', {
				controller  : "BakeryCtrl",
				templateUrl : "templates/pages/bakery.html"
			})
			.when('/lunch', {
				controller  : "LunchCtrl",
				templateUrl : "templates/pages/lunch.html"
			})
			.when('/breads', {
				controller  : "BreadsCtrl",
				templateUrl : "templates/pages/breads.html"
			})
			.when('/deli', {
				controller  : "DeliCtrl",
				templateUrl : "templates/pages/deli.html"
			})
			.when('/ravoli', {
				controller  : "RavoliCtrl",
				templateUrl : "templates/pages/ravoli.html"
			})
			.when('/contact', {
				controller  : "ContactCtrl",
				templateUrl : "templates/pages/contact.html"
			});
	});


var HomeCtrl = function ($scope, $http) {
	buildPage("home");

	$('#home-carousel').carousel({
		interval : 5000,
		cycle    : true
	});	
};


var CoffeeBarCtrl = function ($scope, $http) {
	buildPage("coffee");

	$scope.section = "coffee"

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.coffee;
		});
};


var BreakfastCtrl = function ($scope, $http) {
	buildPage("breakfast");

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.breakfast;
		});
};


var BakeryCtrl = function ($scope, $http) {
	buildPage("bakery");

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.bakery;
		});
};


var LunchCtrl = function ($scope, $http) {
	buildPage("lunch");

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.lunch;
		});
};


var BreadsCtrl = function ($scope, $http) {
	buildPage("breads");

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.breads;
		});
};


var DeliCtrl = function ($scope, $http) {
	buildPage("deli");

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.deli;
		});
};


var RavoliCtrl = function ($scope, $http) {
	buildPage("ravoli");

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.ravoli;
		});
};


var ContactCtrl = function ($scope, $http) {
	buildPage("contact");
};



function buildPage (page) {
	var $t_text = $('.testimonials blockquote'),
		$t_author = $('.testimonials p');

	$.get("/data/testimonials.json")
		.success(function (data) {
			for (var i = 0, j = data.length; i < j; i++) {
				if ( data[i].page == page ) {
					$t_text.text( data[i].text );
					$t_author.text( data[i].author );
				}
			}
		});

	if( page != "home" && page != "contact" ) {

		$.get("/templates/components/menu-sections.html")
			.success(function (data) {
				$('.menu-sections').html(data);
				$('.menu-sections a').removeClass('active');
				$('.menu-sections .' + page).addClass('active');
			});
	}	
	
}
