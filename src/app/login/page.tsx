'use client'

import Link from 'next/link'
import { LogoLink } from '@/components/logoLink'
import { CustomInput } from '@/components/customInput'
import { CustomCheckbox } from '@/components/customCheckbox'

export default function LoginPage() {
  let handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Some Auth logic
  }
  return (
    <div className="mt-12 flex select-none flex-col items-center justify-center">
      <LogoLink />
      <div className="mt-0 w-full max-w-md rounded-lg bg-white p-0 shadow">
        <div className="space-y-4 p-6">
          <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-blue-400/90 md:text-2xl">
            Login
          </h1>
          <form className="space-y-6">
            <CustomInput
              id={'email'}
              inputType={'text'}
              placeholder={'example@mail.com'}
              text={'Email'}
              required={true}
            />
            <CustomInput
              id={'password'}
              inputType={'password'}
              placeholder={'••••••••'}
              text={'Password'}
              required={true}
            />
            <div className="flex items-center justify-between">
              <CustomCheckbox id={'remember'} text={'Remember me'} />
              <Link
                href="/forgot_password"
                className="text-sm font-medium text-blue-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-300/70 px-5 py-2.5 text-sm font-medium text-gray-900/70 duration-200 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
