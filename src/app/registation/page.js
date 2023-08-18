import Nav from '@/components/Shared/NavBar/Nav';
import Link from 'next/link';
import React from 'react'

const Registation = () => {
  return (
    <>
        <Nav/>
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto p-6 bg-white rounded-lg shadow-md  w-96">
        <h2 className="text-2xl font-semibold text-[#FC873B] mb-4 text-center">Registation to Your Account</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block  text-md font-medium text-gray-700">
           Name
            </label>
            <input
              type="Name"
              id="Name"
              name="Name"
              placeholder='Email'
              className="mt-1 p-2  focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full   shadow-lg rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block  text-md font-medium text-gray-700">
            Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              className="mt-1 p-2  focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full   shadow-lg rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block  text-md font-medium text-gray-700">
            Mobile phone number  
            </label>
            <input
              type="number"
              id="email"
              name="email"
              placeholder='Email'
              className="mt-1 p-2  focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full   shadow-lg rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='password'
              className="mt-1 p-2  focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full   shadow-lg rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
             Comfirm Password
            </label>
            <input
              type="password"
              id="ComfirmPassword"
              name="ComfirmPassword"
              placeholder='comfirm password'
              className="mt-1 p-2  focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full   shadow-lg rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 btn bg-[#FFD814] hover:bg-[#e6cc0b] text-black hover rounded-md transition duration-300"
          >
           Registation
          </button>
        </form>        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
             have an account? <Link href="/login" className="text-#FE7216 font-semibold hover:underline transition duration-300">log in</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Registation;
