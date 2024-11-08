import React, { useState } from 'react'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { loginFun } from '../Api';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch=useDispatch()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [errmessage,setErrormessage]=useState('')
const [successMessage,setSuccessMessage]=useState('')
   async function display(){
  loginFun({email,password},dispatch).then((data)=>{ 
    console.log("//////////",data);
    
    setSuccessMessage(data)
  })
  
      
    }

  return (
    <MDBContainer fluid className="p-3 my-5">
<h3>{successMessage}</h3>
    <MDBRow>

      <MDBCol col='10' md='6'>
        <img src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg" class="img-fluid" alt="Phone image" />
      </MDBCol>

      <MDBCol col='4' md='6'>

<p>{errmessage}</p>
        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>setEmail(e.target.value)}/>
        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>setPassword(e.target.value)}/>


        <div className="d-flex justify-content-between mx-4 mb-4">
    <Link to={'/signup'}>Signup for Demoproject ?</Link>
        </div>

        <MDBBtn className="mb-4 w-100" size="lg" onClick={display}>Sign in</MDBBtn>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
  )
}

export default Login