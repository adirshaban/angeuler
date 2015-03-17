'use strict';

angular.module('angeulerApp')
  .controller('ProblemCtrl', function ($scope, $stateParams, Problem, Auth, $http) {

    $scope.answer = "";
    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.checkAnswer = function () {
      $scope.isAnswered = true;
      if ($scope.answer == $scope.problem.answer) {
        $scope.result = true;

        //TODO: send update to the server
        $scope.problem.solvedBy++;
        $http.put('/api/problems/'+ $scope.problem.questionId, $scope.problem);
      }
    };


    Problem.get({id: $stateParams.id})
      .$promise
      .then(function (problem) {
        $scope.problem = problem;
      });
  });
