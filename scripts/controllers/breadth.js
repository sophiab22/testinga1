// ---- BREADTH.JS ----//

'use strict';

APP.controller('BreadthCtrl', function ($scope) {

	// Calculates the total from all of the slider values.
	$scope.total = function(rval01,rval02,rval03,rval04) {

		// Gets the value the user produced in the slider.
		var rval01 = document.getElementById("rangevalue1").value;
	    var rval02 = document.getElementById("rangevalue2").value;
	    var rval03 = document.getElementById("rangevalue3").value;
	    var rval04 = document.getElementById("rangevalue4").value;

	    // Adds up all the values
		$scope.result=parseInt(rval01)+parseInt(rval02)+parseInt(rval03)+parseInt(rval04);

		// Pushes the total 'results' into the results page.
		console.log(this);
		APP.breadthValue.push(this.result);
	}
});
