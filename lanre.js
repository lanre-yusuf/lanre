var app = angular.module("myApp", []);

app.controller("calculator", function($scope) {
	$scope.display= "";
	
	$scope.lol = function(num) {
		$scope.display += num;
	}
	
	$scope.clear = function(val) {
		$scope.display = "";
	}
	
	$scope.evaluate = function() {
		$scope.display = eval($scope.display);
	}
	
	$scope.sqr = function() {
		$scope.display = Math.pow($scope.display, 2);
	}
	
	$scope.poo = function() {
		$scope.display = 1/($scope.display);
	}
	
	$scope.plusmi = function() {
		$scope.display = ($scope.display==Math.abs($scope.display)?-($scope.display):Math.abs($scope.display))
	}
})
