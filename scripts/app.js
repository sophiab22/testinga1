// ---- APP.JS ---- // 
// Main module for this application.

'use strict';

var APP = angular.module('myappApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch',   
    ])

  .config(function ($routeProvider) {
    $routeProvider

      // Main View
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      // IAT Course List View
      .when('/iat', {
        templateUrl: 'views/course-list.html',
        controller: 'CourseListCtrl'
      })

      // Degree View
      .when('/degree', {
        templateUrl: 'views/degree.html',
        controller: 'DegreeCtrl'
      })

      // Breadth View
      .when('/breadth', {
        templateUrl: 'views/breadth.html',
        controller: 'BreadthCtrl'
      })

      // Results View
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })

      // Go back to Main View
      .otherwise({
        redirectTo: '/'
      });
  });

  // ---- APP LOGIC ---- //

  APP.results = [];

  APP.coursesSelected = [];

  APP.degreeSelected = [];

  APP.breadthValue = [];