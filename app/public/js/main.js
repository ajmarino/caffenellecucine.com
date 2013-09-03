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


var HomeCtrl = function ($scope, $rootScope, $http) {
	$rootScope.page_title = "Home";
	$rootScope.active_page = "home";

	buildPage("home");

	$('#home-carousel').carousel({
		interval : 5000,
		cycle    : true
	});	
};


var CoffeeBarCtrl = function ($scope, $rootScope, $http) {
	$rootScope.page_title = "Coffee Bar";
	$rootScope.active_page = "coffeebar";

	buildPage("coffee");

	$scope.section = "coffee"

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.coffee;
		});
};


var BreakfastCtrl = function ($scope, $rootScope, $http) {
	$rootScope.page_title = "Breakfast";
	$rootScope.active_page = "breakfast";

	buildPage("breakfast");

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.breakfast;
		});
};


var BakeryCtrl = function ($scope, $rootScope, $http) {
	$rootScope.page_title = "Bakery";
	$rootScope.active_page = "bakery";

	buildPage("bakery");

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.bakery;
		});
};


var LunchCtrl = function ($scope, $rootScope, $http) {
	$rootScope.page_title = "Lunch";
	$rootScope.active_page = "lunch";

	buildPage("lunch");

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.lunch;
		});
};


var BreadsCtrl = function ($scope, $rootScope, $http) {
	$rootScope.page_title = "Breads";
	$rootScope.active_page = "breads";

	buildPage("breads");

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.breads;
		});
};


var DeliCtrl = function ($scope, $rootScope, $http) {
	$rootScope.page_title = "Deli";
	$rootScope.active_page = "deli";

	buildPage("deli");

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.deli;
		});
};


var RavoliCtrl = function ($scope, $rootScope, $http) {
	$rootScope.page_title = "Ravoli";
	$rootScope.active_page = "ravoli";

	buildPage("ravoli");

	$http.get('/data/menu.json')
		.success(function (data) {
			$scope.menu = data.ravoli;
		});
};


var ContactCtrl = function ($scope, $rootScope, $http) {
	$rootScope.page_title = "Contact";
	$rootScope.active_page = "contact";

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
		$.get("/templates/components/menu-head.html")
			.success(function (data) {
				$('.menu-head').html(data);
			});
		$.get("/templates/components/menu-side.html")
			.success(function (data) {
				$('.menu-side').html(data);
				$('.menu-side a').removeClass('active');
				$('.menu-side .' + page).addClass('active');
			});
	}	
	
}
