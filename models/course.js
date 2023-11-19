import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema.Schema({
  title: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  noOfModules: {
    type: Number,
    required: true,
  },
  creationTime: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
