'use client'

import { IUser } from '@/app/types'
import { UserProfileBox } from '../userProfileBox'
import { CustomInput } from '../customInput'
import { useState } from 'react'
import { CustomButton } from '../customButton'
import { usersService } from '@/services'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { UserContext } from '@/context'

interface Props {
  userInfo: IUser
  accessToken: string
}
export const UserSettings: React.FC<Props> = ({ userInfo, accessToken }) => {
  const { setUser } = useContext(UserContext)
  const router = useRouter()
  const [userCredentials, setUserCredentials] = useState({
    username: userInfo.username,
    password: '',
    passwordAgain: '',
  })

  const handleUpdate = () => {
    let payloadData = {
      username:
        userCredentials.username !== userInfo.username &&
        userCredentials.username.length >= 2
          ? userCredentials.username
          : undefined,
      password:
        userCredentials.password.length >= 8
          ? userCredentials.password
          : undefined,
    }
    usersService.users
      .update(payloadData, accessToken)
      .then((res) => {
        setUser(res.data)

        userCredentials.username !== userInfo.username &&
          (router.replace(`/users/${res.data.username}/settings`),
          router.refresh())
      })
      .catch((e) => console.log(e.data))
  }

  return (
    <>
      <UserProfileBox isLoading={false}>
        <div className="col-span-2 flex items-center justify-center text-4xl capitalize">
          Change your settings
        </div>
        <div className="row-span-2 flex items-center justify-center border-solid border-white">
          <CustomInput
            id="username"
            name="username"
            inputType="text"
            text="Username ✨"
            textColor="text-white"
            minLength={2}
            maxLength={20}
            value={userCredentials.username}
            handleChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                username: e.target.value.trim(),
              })
            }
          />
        </div>
        <div className="flex items-center justify-center">
          <CustomInput
            id="password"
            name="password"
            inputType="password"
            text="New password ⚠️"
            textColor="text-white"
            minLength={8}
            maxLength={32}
            value={userCredentials.password}
            handleChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                password: e.target.value.trim(),
              })
            }
          />
        </div>

        <div className="mt-4 flex items-center justify-center">
          <CustomInput
            id="password_again"
            name="password"
            inputType="password"
            text="New password again ⚠️"
            textColor="text-white"
            minLength={8}
            maxLength={32}
            value={userCredentials.passwordAgain}
            handleChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                passwordAgain: e.target.value.trim(),
              })
            }
          />
        </div>
        <div className="col-span-2 row-span-2 flex items-end justify-center">
          <CustomButton
            disabled={
              userCredentials.password !== userCredentials.passwordAgain ||
              (userCredentials.username === userInfo.username &&
                userCredentials.password.length === 0)
            }
            className="mb-3 w-24 rounded-xl"
            text="Update"
            type_="button"
            onClick={handleUpdate}
          />
        </div>
      </UserProfileBox>
    </>
  )
}
