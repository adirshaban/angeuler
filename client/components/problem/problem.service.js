'use strict';

angular.module('angeulerApp')
  .factory('Problem', function ($resource) {
    return $resource("/api/problems/:id", null,{
      page: {method: 'GET', params: {pageSize: 5}}
    });
  });
