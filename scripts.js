



//controller stuff
var app = angular.module('myApp', ["firebase"]);
app.controller('myCtrl', function($scope, $firebaseArray) {

	var ref = new Firebase("https://trentduffy.firebaseio.com/CollegeTest");

    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.colleges = $firebaseArray(ref);


});
