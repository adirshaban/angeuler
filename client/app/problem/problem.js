'use strict';

angular.module('angeulerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell.problem', {
        url: '/problems/:id',
        templateUrl: 'app/problem/problem.html',
        controller: 'ProblemCtrl'
      });
  });
