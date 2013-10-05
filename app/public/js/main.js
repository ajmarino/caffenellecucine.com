(function () {

}());

angular.module('Caffe', ['ui.bootstrap'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
			.when('/catering', {
				controller  : "CateringCtrl",
				templateUrl : "templates/pages/catering.html"
			})
			.when('/order-form', {
				controller  : "OrderFormCtrl",
				templateUrl : "templates/pages/order-form.html"
			})
			.when('/contact', {
				controller  : "ContactCtrl",
				templateUrl : "templates/pages/contact.html"
			})
			.otherwise({
				templateUrl: "templates/404.html"
			});


	}]);


var HomeCtrl = function ($scope, $rootScope, $http) {
	$rootScope.page_title = "Home";
	$rootScope.active_page = "home";

	buildPage("home");

	$('#home-carousel').carousel({
		interval : 5000,
		cycle    : true
	});	
};


var CoffeeBarCtrl = function ($scope, $rootScope, $http, $window) {
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

	$scope.subhead = "We are proud to offer fresh baked breads, Italian pastries, cookies and desserts from Sal &amp; Jerry's in Brooklyn, and only the finest Boar's Head Meats &amp; Cheeses.";

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


var CateringtCtrl = function ($scope, $rootScope, $http) {
	$rootScope.page_title = "Catering";
	$rootScope.active_page = "catering";

	buildPage("catering");
};


var OrderFormCtrl = function ($scope, $rootScope, $http, $timeout) {
	$rootScope.page_title = "Order Online";
	$rootScope.active_page = "order-form";

	buildPage("order-form");
	

	/**
	 * Datepicker Code
	 */
	$scope.today = function() {
		$scope.dt = new Date();
	};

	$scope.today();

	$scope.showWeeks = true;
	$scope.toggleWeeks = function () {
		$scope.showWeeks = ! $scope.showWeeks;
	};

	$scope.clear = function () {
		$scope.dt = null;
	};

	// Disable weekend selection
	$scope.disabled = function(date, mode) {
		return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	};

	$scope.toggleMin = function() {
		$scope.minDate = ( $scope.minDate ) ? null : new Date();
	};
	$scope.toggleMin();

	$scope.open = function() {
		$timeout(function() {
			$scope.opened = true;
		});
	};

	$scope.dateOptions = {
		'year-format': "'yy'",
		'starting-day': 1
	};


	/**
	 * Timepicker code
	 */
	$scope.mytime = new Date();

	$scope.hstep = 1;
	$scope.mstep = 15;

	$scope.options = {
		hstep: [1, 2, 3],
		mstep: [1, 5, 10, 15, 25, 30]
	};

	$scope.ismeridian = true;
	$scope.toggleMode = function() {
		$scope.ismeridian = ! $scope.ismeridian;
	};

	$scope.update = function() {
		var d = new Date();
		d.setHours( 14 );
		d.setMinutes( 0 );
		$scope.mytime = d;
	};

	$scope.changed = function () {
		console.log('Time changed to: ' + $scope.mytime);
	};

	$scope.clear = function() {
		$scope.mytime = null;
	};

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

	if( page != "home" && page != "contact" &&  page != "catering" &&  page != "order-form" ) {
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

	$('.view-more').click(function (e) {
		if ( $(this).hasClass('collapsed') ) {
			$(this).find('span').text("Hide");
		} else {
			$(this).find('span').text("View More");
		}
	})
	
}
