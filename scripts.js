
//controller stuff
var app = angular.module('myApp', ['firebase', 'ui.router']);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'index.html',
            controller: 'myCtrl'
        })
        .state('college', {
            url:'/colleges',
            templateUrl: 'colleges.html',
            controller: 'myOtherCtrl'
        })
 
}]);


app.controller('myCtrl', function($scope, $firebaseArray, collegesService, $state) {

	var ref = new Firebase("https://trentduffy.firebaseio.com/CollegeTest");

    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.colleges = $firebaseArray(ref);

    $scope.myFunction = function(collegePassed){
	
    	collegesService.setCollege(collegePassed);

    	$scope.tryagain = collegePassed;

	 	$state.go('college');


    };



});


//controller stuff
app.controller('myOtherCtrl', function($scope, $firebaseArray, collegesService, $state) {

    $scope.firstName = "John";
    $scope.lastName = "Doe";

	var ref = new Firebase("https://trentduffy.firebaseio.com/CollegeTest");


    $scope.colleges = $firebaseArray(ref);


	console.log("why?");
	console.log($scope.tryagain);


});


app.service('collegesService', function() {

 var currentCollege;

  var setCollege = function(newCol) {
     currentCollege =  newCol;


  };

  var getCollege = function() {
  	return currentCollege;
  };

  return {
    setCollege: setCollege,
    getCollege: getCollege
  };

});


$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



