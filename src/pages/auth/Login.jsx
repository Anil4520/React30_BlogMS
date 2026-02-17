import React from 'react'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../config'

const Login = () => {


    const navigate=useNavigate()

const handleLogin=async(data)=>{
  try{
      const response=await axios.post(baseUrl+'/Login',data)
      //  console.log(response);
       if(response.status==200){
        console.log(data)
        localStorage.setItem('token',response.data.token)
        navigate('/')
       }else{
        alert("registration failed")
       }
  }
  
  // console.log(data,"inside handle register");
 catch(error){
  // console.log(error.response)
  alert(error?.response?.data?.message)
 }
   
}
  return (
<Form type='Login' onSubmit={handleLogin}/>
  )
}

export default Login