/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Problem = require('../api/problem/problem.model')
var User = require('../api/user/user.model')

Problem.find({}).remove(function() {
  Problem.create({
    questionId: 1,
    title : 'blahhblab',
    question: 'hi',
    solvedBy: 5,
    answer: 1.4
  },{
    questionId: 2,
    title : 'hleopele',
    question: 'hi',
    solvedBy: 123,
    answer: 31.4
  },{
    questionId: 3,
    title : 'heyhehyehyhehy',
    question: 'hi',
    solvedBy: 4,
    answer: 1105
  },{
    questionId: 4,
    title : 'lolololoo',
    question: 'hi',
    solvedBy: 214,
    answer: 500
  },{
    questionId: 5,
    title : 'lolololoo',
    question: 'hi',
    solvedBy: 214,
    answer: 500
  },{
    questionId: 6,
    title : 'lolololoo',
    question: 'hi',
    solvedBy: 214,
    answer: 500
  },{
    questionId: 7,
    title : 'lolololoo',
    question: 'hi',
    solvedBy: 214,
    answer: 500
  },{
    questionId: 8,
    title : 'lolololoo',
    question: 'hi',
    solvedBy: 214,
    answer: 500
  },{
    questionId: 9,
    title : 'lolololoo',
    question: 'hi',
    solvedBy: 214,
    answer: 500
  },{
    questionId: 10,
    title : 'lolololoo',
    question: 'hi',
    solvedBy: 214,
    answer: 500
  },{
    questionId: 11,
    title : 'lolololoo',
    question: 'hi',
    solvedBy: 214,
    answer: 500
  },{
    questionId: 12,
    title : 'lolololoo',
    question: 'hi',
    solvedBy: 214,
    answer: 500
  });
});

User.find({}).remove(function() {
  User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function() {
      console.log('finished populating users');
    }
  );
});
