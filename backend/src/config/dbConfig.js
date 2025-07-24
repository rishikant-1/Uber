import mongoose from "mongoose";

const connectDb = async () =>{
  const url = process.env.MONGO_URI
  try {
    if(!url){
      return console.log("url not found");
    }
  
    await mongoose.connect(`${url}/uber_clone`)

    console.log("db connected successfully");
    
  } catch (error) {
    console.log("db connection failed",error.message);
    
  }


}

export default connectDb;