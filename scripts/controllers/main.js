// ---- MAIN.JS ----//

'use strict';

APP.controller('MainCtrl', function ($scope) {

	// Change color when user clicks the button.
    $scope.buttonAction = function($event, btnstart) {
      console.log($event.currentTarget);                   // Detects if a button has been pressed
      $event.currentTarget.classList.add('app-qb-active')  // Changes the button's color.
    }
});