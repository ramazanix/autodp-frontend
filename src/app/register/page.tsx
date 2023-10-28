'use client'

import React, { useState } from 'react'
import { LogoLink } from '@/components/logoLink'
import { CustomInput } from '@/components/customInput'
import Link from 'next/link'
import { CustomButton } from '@/components/customButton'
import { usersService } from '@/services'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      username: e.target.value,
    })
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      password: e.target.value,
    })
  }

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(userData)
    // usersService
    //   .create(userData.username, userData.password)
    //   .then(() => router.push('/login'))
  }

  return (
    <div className="mt-12 flex select-none flex-col items-center justify-center">
      <LogoLink />
      <div className="mt-0 w-full max-w-md rounded-lg bg-white p-0 shadow">
        <div className="space-y-4 p-6">
          <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-blue-400/90 md:text-2xl">
            Registration
          </h1>
          <form className="space-y-6">
            <CustomInput
              id={'username'}
              text={'Username'}
              inputType={'text'}
              placeholder={'My unique nickname'}
              required={true}
              value={userData.username}
              handleChange={onUsernameChange}
            />
            <CustomInput
              id={'password'}
              text={'Password'}
              inputType={'password'}
              placeholder={'My secret password'}
              required={true}
              value={userData.password}
              handleChange={onPasswordChange}
            />
            <CustomButton
              text={'Sign up'}
              type_={'submit'}
              onClick={handleRegister}
            />
            <p className="text-sm font-light text-gray-500">
              Already have an account?{' '}
              <Link
                href={'/login'}
                className="text-primary-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
