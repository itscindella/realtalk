
//controller stuff
var app = angular.module('myApp', ['firebase', 'ui.router']);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  console.dir(":router");
    $stateProvider
        .state('home', {
            url:'/',
            views: {
              main: {
                 templateUrl: 'index.html',
                  controller: 'myCtrl'
              }
            }

        })
        .state('single', {
            url:'/this',
            views: {
                main: {
                    templateUrl: 'NuDM.html',
                    controller: "singleCtrl"
                }
            }
        })
        .state('college', {
            url:'/colleges',
            views: {
              main: {
                 templateUrl: 'colleges.html',
            controller: 'myOtherCtrl'
              }
            }

        });
        $urlRouterProvider.otherwise('/');

}]);


app.controller('myCtrl', [
    "$scope",
    "$firebaseArray",
    "collegesService",
    "$state",
    function($scope, $firebaseArray, collegesService, $state){
      var ref = new Firebase("https://trentduffy.firebaseio.com/CollegeTest");

    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.colleges = $firebaseArray(ref);


    $scope.myFunction = function(collegePassed){

      collegesService.setCollege(collegePassed);

    $state.go('college');


    };

    }

  ]);


//controller stuff
app.controller('myOtherCtrl', [
    "$scope",
    "$firebaseArray",
    "collegesService",
    "$state",
  function($scope, $firebaseArray, collegesService, $state) {

    $scope.school = collegesService.getCollege();

  if (collegesService.getCollege() == "Boston College") {
	 var majorsData = new Firebase("https://trentduffy.firebaseio.com/Students/Boston%20College/Majors");
   var extraData = new Firebase("https://trentduffy.firebaseio.com/Students/Boston%20College/Extracurriculars");
  } else if (collegesService.getCollege() == "Boston University") {
   var majorsData = new Firebase("https://trentduffy.firebaseio.com/Students/BU/Majors");
   var extraData = new Firebase("https://trentduffy.firebaseio.com/Students/BU/Extracurriculars");
       console.log("come on trent");


  } else if (collegesService.getCollege() == "Northeastern University") {
   var majorsData = new Firebase("https://trentduffy.firebaseio.com/Students/Northeastern/Majors");
   var extraData = new Firebase("https://trentduffy.firebaseio.com/Students/Northeastern/Extracurriculars");
  }  ;


    $scope.majors = $firebaseArray(majorsData);
    $scope.extras = $firebaseArray(extraData);




//    var fuckyou = $firebaseObject(ref);

  //  fuckyou.$bindTo($scope, "data");

  //  $scope.biology = newnew.Biology;



}]);


app.controller('singleCtrl', [
    "$scope",
    "$firebaseArray",
    "collegesService",
    "$state",
  function($scope, $firebaseArray, collegesService, $state) {


   var majorsData = new Firebase("https://trentduffy.firebaseio.com/BusSchool/Majors");
   var extraData = new Firebase("https://trentduffy.firebaseio.com/BusSchool/Extracurriculars");
   console.log("come on trent");


    $scope.majors = $firebaseArray(majorsData);
    $scope.extras = $firebaseArray(extraData);




//    var fuckyou = $firebaseObject(ref);

  //  fuckyou.$bindTo($scope, "data");

  //  $scope.biology = newnew.Biology;



}]);



app.service('collegesService', function() {

 var currentCollege;

  var setCollege = function(newCol) {
     currentCollege =  newCol;
     console.dir(newCol);
     return;
  };

  var getCollege = function() {
  	return currentCollege;
  };

  return {
    setCollege: setCollege,
    getCollege: getCollege
  };

});



// $(function() {
//     $('body').on('click', '.page-scroll a', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });
