import User from '../models/user.js'

export const searchUser = async (params={}) => {
    const users = await User.find(params).exec();
    return users;
}

export const saveUser = async (newUser)=>{
    const user = new User(newUser);
    return await user.save();
}

export const updateUser = async(updatedUser,id)=>{
    const user = await User.findByIdAndUpdate(id,updatedUser).exec();
    return user;
}

export const removeUser = async(id)=>{
    return await User.findByIdAndDelete(id).exec();
}
export const getOneUser = async(email)=>{
    const result= await User.aggregate([
        {
            $match: {
              email: email,
            },
          },
          {
            $project: {
              userName: 1, // Include the 'username' field
              email: 1,    // Include the 'email' field
              contactNumber: 1,  
              _id: 0,      // Exclude the '_id' field

            },
          },
    ]);
    return result;
}