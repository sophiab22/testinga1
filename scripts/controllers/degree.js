'use strict';

APP.controller('DegreeCtrl', function ($scope) {
    $scope.degreeItems = [
      {message:'BA Arts'},
      {message:'BA Science'}
    ];

    $scope.buttonAction = function($event, degree) {
      console.log($event.currentTarget);
      APP.degreeSelected.push(this.degree);
      $event.currentTarget.classList.add('app-qb-active')
    }    
  });
    