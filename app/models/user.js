import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  userID: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  emailID: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  access_token: {
    type: String,
    required: true,
  }
},
{
  versionKey: false
}
);

const User = mongoose.model('instructor', userSchema);

export default User;