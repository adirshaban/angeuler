'use strict';

var Q = require('q');
var populateUsers = require('./seed/user');
var populateProblems = require('./seed/problem');

populateUsers()
  .then(function(users){
    return populateProblems(users);
  })
  .then(function() {
    console.log('Finished populating database.');
  })
  .fail(function(err) {
    console.log('Unable to populate database: ' + err);
  });
