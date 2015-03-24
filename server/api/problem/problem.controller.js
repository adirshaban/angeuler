'use strict';

var _ = require('lodash');
var Problem = require('./problem.model');

// Get list of problems
exports.index = function (req, res) {

  Problem.paginate({}, req.query.page, req.query.limit, function(err, pageCount, problems) {

    if (err) return handleError(res, err);
    problems = _.map(problems, function(problem){
      problem._doc.solvedBy = problem.solvers.length;
      delete problem._doc.solvers;
      return problem;
    });

    res.format({
      json: function() {
        res.json({
          pageCount: pageCount,
          data: problems
        });
      }
    });

  });
};

// Get a single problem
exports.show = function (req, res) {
  Problem.where({questionId: req.params.id}).findOne(function (err, problem) {
    if (err) {
      return handleError(res, err);
    }
    if (!problem) {
      return res.send(404);
    }
    return res.json(problem);
  });
};

// Creates a new problem in the DB.
exports.create = function (req, res) {
  Problem.create(req.body, function (err, problem) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(201, problem);
  });
};

// Updates an existing problem in the DB.
exports.update = function (req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Problem.where({questionId: req.params.id}).findOne(function (err, problem) {
    if (err) {
      return handleError(res, err);
    }
    if (!problem) {
      return res.send(404);
    }

    var updated = _.merge(problem, req.body);
    updated.save(function (err) {
      if (err) {
        return handleError(res, err);
      }
      problem._doc.solvedBy = problem.solvers.length;
      delete problem._doc.solvers;
      return res.json(200, problem);
    });
  });
};

// Deletes a problem from the DB.
exports.destroy = function (req, res) {
  Problem.findById(req.params.id, function (err, problem) {
    if (err) {
      return handleError(res, err);
    }
    if (!problem) {
      return res.send(404);
    }
    problem.remove(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
