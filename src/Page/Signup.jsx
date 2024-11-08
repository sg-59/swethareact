import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { signupFun } from '../Api'

const Signup = () => {

    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [place,setPlace]=useState('')
    const [job,setJob]=useState('')
    const [mobile,setMobile]=useState(Number)
    const [password,setPassword]=useState('')

    const [message,setMessage]=useState('')

    function display(){
      signupFun({username,email,place,job,mobile,password}).then((data)=>{
        console.log('++++++++++++++++',data);
        
        setMessage(data.info)
      }).catch((err)=>{
        console.log(err);
        
      })

    }

  return (
    <div>
        <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
        <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='place' onChange={(e)=>setPlace(e.target.value)}/>
        <input type="text" placeholder='job' onChange={(e)=>setJob(e.target.value)}/>
        <input type="number" placeholder='mobile' onChange={(e)=>setMobile(e.target.value)}/>
        <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={display}>Submit</button>
        <h1>{message}</h1>
        <Link to={'/'}><p>Already have an account?</p></Link>
    </div>
  )
}

export default Signup