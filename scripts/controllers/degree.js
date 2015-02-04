// ---- DEGREE.JS ----//

'use strict';

APP.controller('DegreeCtrl', function ($scope) {
    $scope.degreeItems = [
      {message:'BA Arts'},
      {message:'BA Science'}
    ];

    // The courses will animate and change color when the user selects a degree. 
    // The data will 'saved' and presented in the Results page.
    $scope.buttonAction = function($event, degree) {
      console.log($event.currentTarget);
      APP.degreeSelected.push(this.degree);
      $event.currentTarget.classList.add('app-qb-active')
    }    
});
    