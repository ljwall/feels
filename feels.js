angular.module('feels', [ ])

.controller("feelsCtrl", function() {
	var boom = this.boom;
	this.clear = function() {$scope.message = "";};
    this.save  = function() {alert("Note Saved");};
	//do sentiment analysis
})