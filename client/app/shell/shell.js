'use strict';

angular.module('angeulerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell', {
        abstract: true,
        templateUrl: 'app/shell/shell.html',
        controller: 'ShellCtrl'
      });
  });
