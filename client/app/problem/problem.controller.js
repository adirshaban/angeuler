'use strict';

angular.module('angeulerApp')
  .controller('ProblemCtrl', function ($scope, $stateParams, Problem, Auth) {

    Problem.get({id: $stateParams.id})
      .$promise
      .then(function (problem) {
        $scope.problem = problem;
      });

    var currentUser = Auth.getCurrentUser();

    $scope.answer = "";
    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.checkAnswer = function () {
      $scope.isAnswered = true;
      if ($scope.problem.solvers.indexOf(currentUser._id) != -1) {
        $scope.msg = "You have already answered this question!";
      }
      else if ($scope.answer == $scope.problem.answer) {
        $scope.msg = "Congrtz! your answer is correct";
        $scope.problem.solvers.push(currentUser._id);
        $scope.problem.$update({id: $scope.problem.questionId}, $scope.problem);
      }
      else {
        $scope.msg = "Wrong! try again";
      }
    };
  });
