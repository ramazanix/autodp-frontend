'use client'

import React, { useState } from 'react'
import { LogoLink } from '@/components/logoLink'
import { CustomInput } from '@/components/customInput'
import Link from 'next/link'
import { CustomButton } from '@/components/customButton'
import { usersService } from '@/services'
import { useRouter } from 'next/navigation'
import { ParseFieldErrors } from '@/utils'

export default function RegisterPage() {
  const router = useRouter()
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    form: '',
  })

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      username: e.target.value,
    })
    setErrors({
      ...errors,
      username: '',
    })
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      password: e.target.value,
    })
    setErrors({
      ...errors,
      password: '',
    })
  }

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setErrors({
      ...errors,
      form: '',
    })

    await usersService.users
      .create(userData.username, userData.password)
      .then((res) => {
        if (res.status === 'success') {
          router.push('/login')
        } else {
          if (res.statusCode === 400) {
            setErrors({
              ...errors,
              form: res.data,
            })
          } else if (res.statusCode === 422) {
            let parsedErrors = ParseFieldErrors(res.data)
            // @ts-ignore
            setErrors(parsedErrors)
          }
        }
      })
  }

  return (
    <div className="mt-12 flex select-none flex-col items-center justify-center">
      <LogoLink />
      <div className="mt-0 w-full max-w-md rounded-lg bg-white p-0 shadow">
        <div className="space-y-4 p-6">
          <div>
            <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-blue-400/90 md:text-2xl">
              Registration
            </h1>
            <span className="text-m flex justify-center pt-1 font-bold text-red-400">
              {errors.form}&nbsp;
            </span>
          </div>
          <form className="space-y-2">
            <CustomInput
              id={'username'}
              text={'Username'}
              inputType={'text'}
              placeholder={'My unique nickname'}
              required={true}
              value={userData.username}
              handleChange={onUsernameChange}
            />
            <span className="text-sm text-red-400">
              {errors.username}&nbsp;
            </span>
            <CustomInput
              id={'password'}
              text={'Password'}
              inputType={'password'}
              placeholder={'My secret password'}
              required={true}
              value={userData.password}
              handleChange={onPasswordChange}
            />
            <span className="text-sm text-red-400">
              {errors.password}&nbsp;
            </span>
            <div className="pt-3">
              <CustomButton
                text={'Sign up'}
                type_={'submit'}
                onClick={handleRegister}
              />
            </div>
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
