'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */

 APP.controller('MainCtrl', function ($scope) {
  // $scope.startbtn = [
  //     {message:'Start'},
  //   ];

    $scope.buttonAction = function($event, btnstart) {
      //detects if a button has been pressed
      console.log($event.currentTarget);

      // Turns the color
      $event.currentTarget.classList.add('app-qb-active')

      setTimeout(function() {
        });
      }    
  });