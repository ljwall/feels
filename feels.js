var sentiment = require('sentiment');

angular.module('feels', [ ])

.controller("feelsCtrl", function($scope) {
	var self = this;
	this.clear = function() {$scope.message = "";};
	this.results = [];
    this.check  = function() {
    	self.results = [];
    	var sentence = ($scope.message);
    	var arr = (sentence.split(' '));
    	var sentArr = [];
    	var score, crass;
    	for (var i = 0; i < arr.length; i++) {
    		score = sentiment(arr[i]).score;
    		if (score < 0) {
    			crass = "negative-" + Math.min(5, -score);
    		}
    		else {
    			crass = "positive-" + Math.min(5, score);
    		}
    		self.results.push({"class" : crass, "sentence" : arr[i],"score" : score});
    	};
    };
});