import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './component/card/Card'

const Home = () => {
  return (
   <Layout>
    <div className='mt-20  flex flex-wrap justify-center space-x-6 '>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
   </Layout>
  )
}

export default Home