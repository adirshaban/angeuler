'use strict';

angular.module('angeulerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell.problems', {
        url: '/problems',
        templateUrl: 'app/problems/problems.html',
        controller: 'ProblemsCtrl'
      });
  });

