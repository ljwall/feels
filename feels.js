var sentiment = require('sentiment');

angular.module('feels', [ ])

.controller("feelsCtrl", function($scope) {
	var self = this;
	this.clear = function() {
		$scope.message = "";
		self.results = [];
		self.summary.pos = 0;
		self.summary.neg = 0;
	};
	this.summary = {pos: 0, neg: 0};
	this.results = [];
    this.check  = function() {
    	self.results = [];
    	var sentence = ($scope.message);
    	var arr = (sentence.split(' '));
    	var sentArr = [];
    	var score, crass, sent;
			self.summary.pos = 0;
			self.summary.neg = 0;
    	for (var i = 0; i < arr.length; i++) {
				sent =  sentiment(arr[i]);
    		score = sent.score;
    		if (score < 0) {
    			crass = "negative-" + Math.min(5, -score);
    		}
    		else {
    			crass = "positive-" + Math.min(5, score);
    		}
				console.log(sent.positive);
				self.summary.pos  += sent.positive.length;
				self.summary.neg  += sent.negative.length;
    		self.results.push({"class" : crass, "sentence" : arr[i],"score" : score});
    	};
    };
});
