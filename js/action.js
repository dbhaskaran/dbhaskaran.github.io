   $(function(){
       $("li.expandable").click(function(){
         $(this).children('ul').toggle('slow');
   });
   });

var myModule = angular.module("timerApp", []);
myModule.controller("counterCtrl",['$scope','$timeout', function($scope,$timeout){
$scope.counter = 1380;
var stopped;
$scope.countdown = function() {
   stopped = $timeout(function() {
      console.log($scope.counter);
    $scope.counter--;
    $scope.countdown();
   }, 1000);
 };
$scope.stop = function(){
  $timeout.cancel(stopped);
   }
}]);
