'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProblemSchema = new Schema({
  questionId: Number,
  title: String,
  question: String,
  solvedBy: Number,
  answer: Number
});

module.exports = mongoose.model('Problem', ProblemSchema);
