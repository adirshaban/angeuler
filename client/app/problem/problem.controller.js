'use strict';

angular.module('angeulerApp')
  .controller('ProblemCtrl', function ($scope, $stateParams, Problem ) {
    Problem.get({id: $stateParams.id})
      .$promise
      .then(function(problem){
        $scope.problem = problem;
      });

    console.log($scope.problem);
  });
