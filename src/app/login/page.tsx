'use client'

import Header from '@/components/header'

export default function LoginPage() {
  let handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Some Auth logic
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='w-full bg-white rounded-lg shadow  mt-0 max-w-md p-0'>
        <div className='p-6 space-y-4'>
          <h1
            className='flex justify-center text-xl font-bold leading-tight tracking-tight text-blue-400/90 md:text-2xl'>
            Log in
          </h1>
          <form className='space-y-6'>
            <div>
              <label htmlFor='email'
                     className="block mb-2 text-l select-none font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-orange-400/80">Email</label>
              <input type='email' id='email' name='email'
                     className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:ring-orange-300 focus:border-amber-100 block w-full p-2.5 duration-300'
                     placeholder='example@mail.com' required />
            </div>
            <div>
              <label htmlFor='password'
                     className="block mb-2 text-l select-none font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-orange-400/80">Password</label>
              <input type='password' id='password' name='password'
                     className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:ring-orange-300 focus:border-amber-100 block w-full p-2.5 duration-300'
                     placeholder='••••••••' required />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input type='checkbox' id='remember' aria-describedby='remember'
                         className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300' />
                </div>
                <div className='ml-2 text-sm align-top -mb-1 inline-flex select-none'>
                  <label htmlFor='remember' className='text-gray-500'>Remember me</label>
                </div>
              </div>
              <a href='#' className='select-none text-sm font-medium text-blue-600 hover:underline'>Forgot password?</a>
            </div>
            <button type='submit'
                    className='w-full text-black bg-gradient-to-bl hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                    onClick={handleLogin}>Log in
            </button>
            <p className='text-sm font-light text-gray-500'>
              Don’t have an account yet?
              {' '}
              <a href='/register' className='font-medium text-primary-600 hover:underline'>
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
