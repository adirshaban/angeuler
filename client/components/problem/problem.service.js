'use strict';

angular.module('angeulerApp')
  .factory('Problem', function ($resource) {
    return $resource("/api/problems/:id",  {
      id: '@_id'
    });
  });
