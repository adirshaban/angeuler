'use strict';

angular.module('angeulerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell.main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
