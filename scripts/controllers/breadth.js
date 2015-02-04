'use strict';

APP.controller('BreadthCtrl', function ($scope) {

	$scope.total = function(rval01,rval02,rval03,rval04) {

		var rval01 = document.getElementById("rangevalue1").value;
	    var rval02 = document.getElementById("rangevalue2").value;
	    var rval03 = document.getElementById("rangevalue3").value;
	    var rval04 = document.getElementById("rangevalue4").value;

		$scope.result=parseInt(rval01)+parseInt(rval02)+parseInt(rval03)+parseInt(rval04);

		console.log(this);
		APP.breadthValue.push(this.result);
	}

});
