import {Router} from "express";
import { loginController, logoutController, registerController } from "../controller/user.controller.js";

const router = Router();

export const test = router.get("/",(req,res)=>{
  res.send("hello")
})


//create router for user register,login and logout

const register = router.post("/register",registerController);
const login = router.post("/login",loginController);
const logout = router.post("/logout",logoutController);


export {
  register,
  login,
  logout
}