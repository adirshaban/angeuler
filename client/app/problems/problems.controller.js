'use strict';

angular.module('angeulerApp')
  .controller('ProblemsCtrl', function ($scope, $http, socket, Problem) {
    $scope.problems = [];
    $scope.currentPage = 1;
    $scope.pageSize = 5;

    $scope.changePage = function (pageNumber) {
      Problem.get({page: pageNumber, limit: $scope.pageSize})
        .$promise
        .then(function (res) {
          $scope.problems =  res.data;
          $scope.pageCount = res.pageCount;
          socket.syncUpdates('problem', $scope.problems);
        });

      $scope.currentPage = pageNumber;
    };

    $scope.changePage($scope.currentPage);

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('problem');
    });
  });
