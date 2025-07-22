import express from "express"
const app = express()

console.log(process.env.PORT);



const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
  console.log(`server listening at: ${PORT}`);
  
})