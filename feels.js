angular.module('feels', [ ])

.controller("feelsCtrl", function($scope) {
	//this.message = "";
	this.clear = function() {$scope.message = "";};
    this.save  = function() {alert($scope.message);};
	//do sentiment analysis
})