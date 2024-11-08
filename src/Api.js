import axios from "axios";
import { addLoginData } from "./Redux/userSlice";

export const signupFun=async(data)=>{
    try{
const responseData=await axios.post('http://localhost:9000/user/postdata',data)
console.log("Api response in bakend",responseData.data);
return responseData.data

    }catch(err){

    }
}

export const loginFun=async(data,dispatch)=>{
    try{
   const response=await axios.post('http://localhost:9000/authenticate/login',data)
   console.log(response.data);
   dispatch(addLoginData(response.data))
   return response.data.message
    }catch(err){
console.log("errrrrrrrr",err.response.data);
return err.response.data
    }
}