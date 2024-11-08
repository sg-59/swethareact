import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Page/Login'
import Signup from './Page/Signup'
import { useSelector } from 'react-redux'
import Home from './Page/Home'


function App() {

  const loginDatas=useSelector((state)=>state.loginfo.logdata)
  console.log("final answer in app.js page",loginDatas);
  if(loginDatas){
    var token=loginDatas.token
  }

const router=createBrowserRouter([
  {
    path:'/',
    element:token ? <Home/> : <Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  }
])
  return (
    <>
<RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
