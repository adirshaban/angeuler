'use strict';

var loremIpsum = require('lorem-ipsum');
var _ = require('lodash');
var Q = require('q');
var Problem = require('../../api/problem/problem.model');

var title = {
  count: 1,
  units: 'sentences',
  sentenceLowerBound: 5,
  sentenceUpperBound: 8,
  format: 'plain'
};

var quest = {
  count: 1,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 3,
  paragraphUpperBound: 7
};

var populateProblems = function(users) {
  var deferred = Q.defer();
  Problem.find({}).remove(function () {
    Problem.create(_.times(30, function (n) {
      return {
        questionId: n + 1,
        title: loremIpsum(title),
        question: loremIpsum(quest),
        solvers: [users[n%users.length]],
        answer: 1.4
      }
    }))
  });

  return deferred.promise;
};

module.exports = populateProblems;
