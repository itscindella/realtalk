



var ref = new Firebase("https://trentduffy.firebaseio.com/Colleges");

var colleges;

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  colleges = snapshot.val();

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});



//controller stuff
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.unis = colleges;
});


