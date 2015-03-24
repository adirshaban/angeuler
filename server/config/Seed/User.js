'use strict';
var Q = require('q');
var _ = require('lodash');
var User = require('../../api/user/user.model');

var populateUsers = function () {
  var deferred = Q.defer();
  User.find({}).remove(function () {
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
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Adir',
        email: 'adir@admin.com',
        password: 'admin'
      }, function (err) {
        if (err) {
          deferred.reject(err);
        } else {
          deferred.resolve(_.toArray(arguments).slice(1));
        }
      }
    );
  }, function (err) {
    if (err) {
      deferred.reject(err);
    }
  });

  return deferred.promise;
};

module.exports = populateUsers;
