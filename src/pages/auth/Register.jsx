import React from 'react'
import Form from './components/form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'

const Register = () => {
  
  const navigate=useNavigate()

const handleRegister=async(data)=>{
  try{
      const response=await axios.post(`${baseUrl}/register`,data)
      //  console.log(response);
       if(response.status==201){
        navigate('/login')
       }else{
        alert("registration failed")
       }
  }
  
  // console.log(data,"inside handle register");
 catch(error){
  console.log(error)
  alert(error?.response?.data?.message)
 }
   
}



  return (
<Form type='Register'onSubmit={handleRegister}/>
  )
}

export default Register