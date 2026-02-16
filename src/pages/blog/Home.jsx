import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './component/card/Card'
import axios from 'axios'
import { baseUrl } from '../../config'

const Home = () => {

  const [blogs,setBlogs]=useState([])
  const fetchBlogs=async()=> {
   const response= await axios.get(`${baseUrl}/blog`)
   if(response.status===200){
    setBlogs(response.data.data)
   }
  }
  useEffect(()=>{
    fetchBlogs()
  },[])


  return (
   <Layout>
    <div className='mt-20  flex flex-wrap justify-center space-x-6 '>
     {
      blogs.length > 0 && blogs.map((blog)=>{
        console.log(blog)
        return(
             <Card blog={blog}/>
        )
      })
     }
      
    </div>
   </Layout>
  )
}

export default Home