'use client'

import Link from 'next/link'
import { LogoLink } from '@/components/logoLink'
import { CustomInput } from '@/components/customInput'
import { CustomCheckbox } from '@/components/customCheckbox'
import { CustomButton } from '@/components/customButton'
import { useLogin } from '@/hooks/useLogin'
import React, { useState } from 'react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useLogin()

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  let handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    login(username, password)
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
              id={'username'}
              inputType={'text'}
              placeholder={'username'}
              text={'Username'}
              required={true}
              value={username}
              handleChange={onUsernameChange}
            />
            <CustomInput
              id={'password'}
              inputType={'password'}
              placeholder={'••••••••'}
              text={'Password'}
              required={true}
              value={password}
              handleChange={onPasswordChange}
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
            <CustomButton
              text={'Sign in'}
              type_={'submit'}
              onClick={handleLogin}
            />
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
