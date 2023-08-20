import React from 'react'
import Nav from '@/components/Shared/NavBar/Nav'
import Link from 'next/link';

const LoginPage = () => {
  return (
    <>
    <Nav/>
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto p-6 bg-white rounded-lg shadow-md  w-96">
        <h2 className="text-2xl font-semibold text-[#FC873B] mb-4 text-center">Log in to Your Account</h2>
        <form className="space-y-4 mt-5">
          <div>
            <label htmlFor="email" className="block  text-md font-medium text-gray-700">
            Mobile phone number or email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Name'
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
          <button
            type="submit"
            className="w-full py-2 btn bg-[#FFD814] hover:bg-[#e6cc0b] text-black hover rounded-md transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="mt-4">
          <p className="text-sm text-gray-600 text-center">
            Or log in with social media
          </p>
          <div className="flex justify-center space-x-4 mt-2">
              <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                  <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                  </svg>
                Sign in with Facebook
              </button> 
              <button type="button" class="text-black bg-slate-200  focus:ring-4 focus:outline-none focus:ring-[#000]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <svg className="w-4 h-4 mr-2 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                  <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                </svg>
                Sign in with Google
              </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <Link href="/registation" className="text-#FE7216 font-semibold hover:underline transition duration-300">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default LoginPage;
