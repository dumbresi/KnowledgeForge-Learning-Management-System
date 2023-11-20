import mongoose from "mongoose";

const schema = mongoose.Schema;

const instructorSchema = new schema({
  instructor_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: true,
  },
  contactnum: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  access_token: {
    type: String,
    required: true,
  },
  course_id: {
    type: String,
    required: true,
  }
},
{
  versionKey: false
}
);

const Instructor = mongoose.model('instructor', instructorSchema);

export default Instructor;