/**
 * Created by adirs_000 on 20/03/2015.
 */
'use strict';

var Problem = require('../../api/problem/problem.model');
var loremIpsum = require('lorem-ipsum');
var _ = require('lodash');

var title = {
  count: 1
  , units: 'sentences'
  , sentenceLowerBound: 5
  , sentenceUpperBound: 8
  , format: 'plain'
};

var quest = {
  count: 1
  , units: 'paragraphs'
  , sentenceLowerBound: 5
  , sentenceUpperBound: 15
  , paragraphLowerBound: 3
  , paragraphUpperBound: 7
};

Problem.find({}).remove(function () {
  Problem.create(_.times(30, function (n) {
    return {
      questionId: n,
      title: loremIpsum(title),
      question: loremIpsum(quest),
      solvers: [],
      answer: 1.4
    }
  }))
});
