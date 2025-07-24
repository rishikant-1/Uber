import express from "express"
import {register,login,logout} from "./router/user.routes.js"
import connectDb from "./config/dbConfig.js"
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


connectDb()
app.use("/api/v1",register)
app.use("/api/v1",login)
app.use("/api/v1",logout)









const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
  console.log(`server listening at: ${PORT}`);
  
})