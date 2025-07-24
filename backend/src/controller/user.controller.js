import User from "../model/user.models.js"
import ApiError from "../utils/ApiError.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import ApiResponse from "../utils/ApiResponse.js"

// user register controller


const  registerController = async (req,res)=>{
  
  const { firstName , lastName , email , password ,phone} = req.body
  
  try {
    if( !firstName || !email || !password || !phone)
      throw new ApiError("fill all required fields.")
  
    if(firstName.trim().length < 3)
      throw new ApiError("First name must be at least 3 characters long.")

    if (email.trim().length < 10 || !email.includes("@"))
    throw new ApiError("email is not valid.")

    if ( !/^[6-9]\d{9}$/.test(phone.trim()))
      throw new ApiError("phone number is not valid")

    if (password.trim().length < 8)
      throw new ApiError("Password must be at least 8 characters long.")

    const user = await User.findOne({email})

    if(user)
      throw new ApiError("email already exixts")

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)

    const data = await User({
      fullName : {
        firstName,lastName
      },
      email,
      password:hashedPassword,
      phone
    })
    .save()

    console.log(data)
}
 catch (error) {
    console.log("register error : ",error.message);    
  }
}


// user login controller

const loginController = async (req, res) => {
  const { email, password } = req.body

  try {
    if ( !email || !password)
      throw new ApiError("fill all required fields.")

    if (email.trim().length < 10 || !email.includes("@"))
      throw new ApiError("email is not valid.")

    if (password.trim().length < 8)
      throw new ApiError("Password must be at least 8 characters long.")

    const user = await User.findOne({ email })

    if (!user)
      throw new ApiError("user not found")

    const isPassword = await bcrypt.compare(password,user.password)

    if(!isPassword)
      throw new ApiError("possword is not correct")

    const token  = jwt.sign(
      {
        id : user ._id,
        email : user.email,
        phone : user.phone,
        fullName : user.fullName
      },
      process.env.JWT_SECRET,
      { 
        expiresIn : "24h"
      }
    )

    res
    .cookie("token",token,{
      httpOnly : true,
      secure : true ,
      sameSite : "strict",
      maxAge : 24*7*60*60*1000
    })
    .json(new ApiResponse("login successfully"))

  }
  catch (error) {
    console.log("register error : ", error.message);
  }
}

// user logout controller

const logoutController = async (req, res) => {
  // const { firstName, lastName, email, password } = req.body

  // if (!firstName || !email || !password)
    return
}






export {
  registerController,
  loginController,
  logoutController
}