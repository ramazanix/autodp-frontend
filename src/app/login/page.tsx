'use client'

import Header from '@/components/header'
import Link from 'next/link'
import Logo from '../../../public/logo.svg'

export default function LoginPage() {
  let handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Some Auth logic
  }
  return (
    <div className="mt-12 flex select-none flex-col items-center justify-center">
      <Link
        href="/"
        className="mb-4 flex items-center text-2xl font-semibold text-gray-900"
      >
        <Logo className="h-full w-full fill-white" alt="AutoDP" />
      </Link>
      <div className="mt-0 w-full max-w-md rounded-lg bg-white p-0 shadow">
        <div className="space-y-4 p-6">
          <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-blue-400/90 md:text-2xl">
            Login
          </h1>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="text-l mb-2 block font-medium text-gray-900 after:ml-0.5 after:text-red-400 after:content-['*']"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="box-shadow block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-[inset_0_0_0px_1000px_rgb(249,250,251)] duration-300 selection:bg-blue-200 focus:border-amber-50 focus:outline-none focus:ring focus:ring-red-300/90"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-l mb-2 block font-medium text-gray-900 after:ml-0.5 after:text-red-400 after:content-['*']"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="box-shadow block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-[inset_0_0_0px_1000px_rgb(249,250,251)] duration-300 selection:bg-blue-200 focus:border-amber-50 focus:outline-none focus:ring focus:ring-red-300/90"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    aria-describedby="remember"
                    className="h-4 w-4 cursor-pointer rounded border border-gray-500 duration-200 checked:bg-red-400 checked:hover:bg-red-400 focus:ring-0 focus:ring-offset-0 focus:checked:bg-red-400"
                  />
                </div>
                <div className="-mb-1 ml-2 inline-flex align-top text-sm">
                  <label htmlFor="remember" className="text-gray-500">
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                href="/forgot_password"
                className="text-sm font-medium text-blue-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-300/70 px-5 py-2.5 text-sm font-medium text-gray-900/70 duration-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={handleLogin}
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet?{' '}
              <Link
                href="/register"
                className="text-primary-600 font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
