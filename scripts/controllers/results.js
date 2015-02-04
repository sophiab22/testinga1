// ---- RESULTS.JS ----//

'use strict';

// Takes all the 'saved' logic and be able to display it.
APP.controller('ResultsCtrl', function ($scope) {
    $scope.degreeItems = APP.degreeSelected;
    $scope.courses = APP.coursesSelected;
    $scope.result = APP.breadthValue;
});

