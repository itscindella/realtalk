
//controller stuff
var app = angular.module('myApp', ["firebase"]);
app.controller('myCtrl', function($scope, $firebaseArray, collegesService) {

	var ref = new Firebase("https://trentduffy.firebaseio.com/CollegeTest");

    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.colleges = $firebaseArray(ref);

    $scope.myFunction = function(collegePassed){
	
    	collegesService.setCollege(collegePassed);

	 	window.location.href = "colleges.html";


    };



});


//controller stuff
app.controller('myOtherCtrl', function($scope, $firebaseArray, collegesService) {

    $scope.firstName = "John";
    $scope.lastName = "Doe";

	var ref = new Firebase("https://trentduffy.firebaseio.com/CollegeTest");


    $scope.colleges = $firebaseArray(ref);


	console.log("why?");
	console.log(collegesService.getCollege());


});


app.service('collegesService', function() {

 var currentCollege;

  var setCollege = function(newCol) {
     currentCollege =  newCol;


  };

  var getCollege = function() {
  	return this.currentCollege;
  };

  return {
    setCollege: setCollege,
    getCollege: getCollege
  };

});