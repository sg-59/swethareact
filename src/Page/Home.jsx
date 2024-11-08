import React from 'react'
import { useDispatch } from 'react-redux'
import { removedatas } from '../Redux/userSlice'

function Home() {

   const dispatch= useDispatch()

function removeData(){
dispatch(removedatas())
}

  return (
    <div>
      <h1>Welcome to home page</h1>
      <button onClick={removeData}>logout</button>
    </div>
  )
}

export default Home
