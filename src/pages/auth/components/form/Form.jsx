import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = ({type,onSubmit}) => {
    const[data,setData]=useState({
email:'',
username:'',
password:''

    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
        // console.log(data);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(data);
    }
  return (
       <section className="bg-gray-50 dark:bg-gray-600 h-screen">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className=" flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flexjustify-center">
                    {
                        type==='Login'?'Login here to continue':'Register here to contineu...'

                    }
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="" onChange={handleChange}/>
                    </div>
                  {
                    type==='Register' &&(
                          <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required=""onChange={handleChange}/>
                  </div>
                    )
                  }
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""onChange={handleChange}/>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-6">Login</button>
                </form>
            </div>
            {
                type==='Register'?(
                    <Link to='/login'style={{color:'blue'}}  className='flex justify-end p-1 mr-2 mb-3'>Go to login</Link>
                ):<Link to='/register' style={{color:'blue'}} className='flex justify-end p-1 mr-2 mb-3'>Go to Register</Link>
            }
        </div>
    </div>
  </section>
  )
}

export default Form