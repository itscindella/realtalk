// Get a database reference to the colleges 
var ref = new Firebase("https://trentduffy.firebaseio.com/Colleges");
// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// controller 

// calling controller for table 
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope) {
	$scope.firstName = "john";
	$scope.lastName = "doe";
});



