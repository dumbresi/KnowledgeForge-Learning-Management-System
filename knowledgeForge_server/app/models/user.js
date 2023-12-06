import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // profile_picture: {
  //   type: String,
  //   required: true,
  // },
  contactNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  registeredCourses:{
    type: String,
    required: false,
  }
  
},
{
  versionKey: false
}
);

const User = mongoose.model('user', userSchema);

export default User;