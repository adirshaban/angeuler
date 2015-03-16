'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProblemSchema = new Schema({
  questionId: Number,
  title: String,
  question: String,
  solvedBy: Number,
  answer: Number
});

ProblemSchema.plugin(require('mongoose-paginate'));

module.exports = mongoose.model('Problem', ProblemSchema);
