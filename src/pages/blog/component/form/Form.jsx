import React from 'react'
import Layout from '../../../../components/layout/Layout'

const Form = ({type}) => {

  return (

                  <div className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
  <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
  </div>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">{type}<br/>Blog</h2>
  </div>
  <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white"></label>
        <div className="mt-2.5">
          <input id="first-name" type="text" placeholder="Title*"name="first-name" autoComplete="given-name" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white"></label>
        <div className="mt-2.5">
          <input id="last-name" type="text"placeholder='sub Title*' name="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="file" className="block text-sm/6 font-semibold text-white"></label>
        <div className="mt-2.5">
          <input id="file" type="file" name="file" autoComplete="file" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white"></label>
        <div className="mt-2.5">
          <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
            <div className="grid shrink-0 grid-cols-1 focus-within:relative"> 
            </div>
            <input id="phone-number" type="text" name="phone-number" placeholder="Category*" className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
          </div>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="message" className="block text-sm/6 font-semibold text-white">Description</label>
        <div className="mt-2.5">
          <textarea id="message" name="message" rows="4" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"></textarea>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create</button>
    </div>
  </form>
</div>

  )
}

export default Form