'use strict';

angular.module('angeulerApp')
  .controller('ProblemsCtrl', function ($scope, $http, socket, Problem) {
    $scope.problems = [];
    $scope.currentPage = 0;
    $scope.pageSize = 5;

    $scope.numberOfPages=function(){
      return Math.ceil($scope.problems.length/$scope.pageSize);
    };

    Problem.query()
      .$promise
      .then(function (problems) {
        $scope.problems = problems;
        socket.syncUpdates('problem', $scope.problems);
      });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('problem');
    });
  });
