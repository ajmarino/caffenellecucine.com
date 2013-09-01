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
	var $t_text = $('.testimonials blockquote'),
		$t_author = $('.testimonials p');

		$t_text.text("Great Place! Coffee is always good. For pleasure or business I go to Caffe Cucine.");
		$t_author.text("- Tom P");

		$scope.page_title = "Home";

		$('#home-carousel').carousel({
			interval : 5000,
			cycle    : true
		})

	// $http.get("/api/workouts")
	// 	.success(function (data) {
	// 		$scope.workouts  = data[0];
	// 		$scope.exercises = data[1];
	// 		$scope.sets      = data[2];

	// 		var filtered_sets = [];

	// 		for (var s = 0; s < $scope.sets.length; s++) {
	// 			filtered_sets.push( $scope.sets[s] );

	// 			for (var ex = 0; ex < $scope.exercises.length; ex++) {
	// 				if ( $scope.exercises[ex].set == $scope.sets[s] ) {
	// 					filtered_sets[s].push( $scope.exercises[ex].exercise );
	// 				}
	// 			};
	// 		};

	// 		console.log( filtered_sets );
	// 	});

	// $('#addExercise').click(function (e) {
	// 	var num = parseInt( $(this).attr('data-num') );
	// 	num += 1;
	// 	$(this).attr('data-num', num);

	// 	$('#newExercises').append(
	// 		'<div class="control-group"><label class="control-label"></label><div class="controls"><input type="text" class="span4"><input type="text" class="span1"><input type="text" class="span1"></div></div>');
	// });


	// $('#addNewSet').click(function (e) {
	// 	$('#newExercises').html('<div class="control-group"><label class="control-label"></label><div class="controls"><input type="text" class="span4"><input type="text" class="span1"><input type="text" class="span1"></div></div>');

	// });
	

	$scope.message = "Hello";


	$t_text.text("Great Place! Coffee is always good. For pleasure or business I go to Caffe Cucine.");
	$t_author.text("- Tom P");
};


var CoffeeBarCtrl = function ($scope, $http) {
	var $t_text = $('.testimonials blockquote'),
		$t_author = $('.testimonials p');

		$t_text.text("I saw your ad on Facebook and decided after church we would stop in and try your bagels. They were very good and made to order, they were made on site. We saw fresh bread that came out of the oven and we could not resist. The place is nice and clean and we were treated wery well. I took a menu and after we looked it over we decided we have to go for lunch, everything looks good and also clean. You can't go wrong, there is something for everyone.	We were glad to find this place and will tell our friends.");
		$t_author.text("- Anna S");
};


var BreakfastCtrl = function ($scope, $http) {
	var $t_text = $('.testimonials blockquote'),
		$t_author = $('.testimonials p');
	
		$t_text.text("Good, wholesome food for reasonable prices and excellent service. Plenty of accommodations.");
		$t_author.text("- Jon W");
};


var BakeryCtrl = function ($scope, $http) {
	var $t_text = $('.testimonials blockquote'),
		$t_author = $('.testimonials p');
	
		$t_text.text("Good, wholesome food for reasonable prices and excellent service. Plenty of accommodations.");
		$t_author.text("- Jon W");
};


var LunchCtrl = function ($scope, $http) {
	var $t_text = $('.testimonials blockquote'),
		$t_author = $('.testimonials p');
	
		$t_text.text("Good, wholesome food for reasonable prices and excellent service. Plenty of accommodations.");
		$t_author.text("- Jon W");
};


var BreadsCtrl = function ($scope, $http) {
	var $t_text = $('.testimonials blockquote'),
		$t_author = $('.testimonials p');
	
		$t_text.text("Good, wholesome food for reasonable prices and excellent service. Plenty of accommodations.");
		$t_author.text("- Jon W");
};


var DeliCtrl = function ($scope, $http) {
	var $t_text = $('.testimonials blockquote'),
		$t_author = $('.testimonials p');
	
		$t_text.text("Good, wholesome food for reasonable prices and excellent service. Plenty of accommodations.");
		$t_author.text("- Jon W");
};


var RavoliCtrl = function ($scope, $http) {
	var $t_text = $('.testimonials blockquote'),
		$t_author = $('.testimonials p');
	
		$t_text.text("Good, wholesome food for reasonable prices and excellent service. Plenty of accommodations.");
		$t_author.text("- Jon W");
};


var ContactCtrl = function ($scope, $http) {
	var $t_text = $('.testimonials blockquote'),
		$t_author = $('.testimonials p');
	
		$t_text.text("Good, wholesome food for reasonable prices and excellent service. Plenty of accommodations.");
		$t_author.text("- Jon W");
};
