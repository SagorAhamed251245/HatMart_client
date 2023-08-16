import React from 'react'
import Nav from '../../components/Shared/NavBar/Nav';

const LoginPage = () => {
  return (
    <>
    <Nav/>
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto p-6 bg-white rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Log in to Your Account</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="mt-4">
          <p className="text-sm text-gray-600 text-center">
            Or log in with social media
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Facebook
            </button>
            <button className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition duration-300">
              Google
            </button>
            <button className="bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-700 transition duration-300">
              Twitter
            </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-#FE7216 font-semibold hover:underline transition duration-300">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default LoginPage;
