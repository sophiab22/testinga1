'use strict';

/* IAT Course List Controller */

APP.controller('CourseListCtrl', ['$scope', '$http',
	function($scope, $http) {
	$http.get('courses.json').success(function(data) {
		$scope.courses = data;
	}).error(function(e) {
		console.log(e);
	});


	$scope.buttonAction = function($event, course) {
		console.log($event.currentTarget);
		APP.coursesSelected.push(this.course);
    $event.currentTarget.classList.add('app-qb-active')
	}
}]);
