import mongoose,{ Schema }  from "mongoose"

const userSchema = new Schema({
  fullName: {
    firstName: {
      type: String,
      minLength: 3,
      required: true,
      trim : true
    },
    lastName: {
      type: String,
      trim : true,
    }
  },
  email : {
    type : String,
    required : true,
    unique : true,
    lowercase : true,
    trim: true,

  },
  password : {
    type : String,
    required : true,
    trim: true,

  },
  phone : {
    type : String,
    required : true,
    trim: true,
    unique : true,
  },
  profile : {
    type : String,
    default : '',
    trim: true,
  }
},{timestamp : true})


const User = mongoose.model("User",userSchema)

export default User