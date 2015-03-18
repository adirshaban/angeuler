'use strict';

angular.module('angeulerApp')
  .controller('ProblemCtrl', function ($scope, $stateParams, Problem, Auth) {

    $scope.answer = "";
    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.checkAnswer = function () {
      $scope.isAnswered = true;
      if ($scope.answer == $scope.problem.answer) {
        $scope.result = true;
        $scope.problem.solvedBy++;
        $scope.problem.$update({id:$scope.problem.questionId }, $scope.problem);
      }
    };


    Problem.get({id: $stateParams.id})
      .$promise
      .then(function (problem) {
        $scope.problem = problem;
      });
  });
