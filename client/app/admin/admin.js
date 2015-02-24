'use strict';

angular.module('angeulerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell.admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  });
