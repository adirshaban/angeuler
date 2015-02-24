'use strict';

angular.module('angeulerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell.problems', {
        url: '/problems',
        templateUrl: 'app/problems/problems.html',
        controller: 'ProblemsCtrl'
      });
  })
  .filter('startFrom', function () {
    return function (input, start) {
      start = +start; //parse to int
      return input.slice(start);
    }
  });

