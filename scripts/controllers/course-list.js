// ---- COURSE-LIST.JS ----//

'use strict';

// Uses data entered into a 'courses.json' file
APP.controller('CourseListCtrl', ['$scope', '$http',
	function($scope, $http) {
	$http.get('courses.json').success(function(data) {	
		$scope.courses = data;	
	}).error(function(e) {
		console.log(e);
	});


	// The courses will animate and change color when the user selects a course. 
	// The data will 'saved' and presented in the Results page.
	$scope.buttonAction = function($event, course) {
		console.log($event.currentTarget);
		APP.coursesSelected.push(this.course);
    	$event.currentTarget.classList.add('app-qb-active')
	}
}]);
