'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var ProblemSchema = new Schema({
  questionId: Number,
  title: String,
  question: String,
  solvers: [{ type: Schema.ObjectId, ref: 'User' }],
  answer: Number
});

ProblemSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Problem', ProblemSchema);
