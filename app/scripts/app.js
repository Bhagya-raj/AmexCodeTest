'use strict';

/**
 * @ngdoc overview
 * @name bhagyarajCodingApp
 * @description
 * # bhagyarajCodingApp
 *
 * Main module of the application.
 */
angular
  .module('bhagyarajCodingApp', [
    'ngRoute'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/user', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tag', {
        templateUrl: 'views/tag.html',
        controller: 'TagCtrl'
      })
      .when('/retention', {
        templateUrl: 'views/retention.html',
        controller: 'retentionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
