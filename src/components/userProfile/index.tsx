'use client'

import { IUser } from '@/app/types'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { UserProfileSkeleton } from './skeleton'
import { Modal } from '../modal'
import { AvatarChanger } from '../avatarChanger'
interface Prop {
  userInfo: IUser
  owner: boolean
  accessToken: string
}

export const UserProfile: React.FC<Prop> = ({
  userInfo,
  owner,
  accessToken,
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showText, setShowText] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [image, setImage] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onImageHover = () => {
    setShowText(true)
  }

  const onImageUnHover = () => {
    setShowText(false)
  }

  const onModalClose = () => {
    setShowModal(false)
    setImage('')
  }

  const handleOnImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setShowModal(true)
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = function (e) {
        setImage(reader.result?.toString()!)
      }
      e.target.value = ''
    }
  }

  return (
    <>
      <UserProfileSkeleton isLoading={isLoading} />
      <div
        className={
          isLoading
            ? 'hidden'
            : 'max-h-15 relative mx-auto my-6 grid w-1/2 grid-cols-2 grid-rows-4 rounded-2xl bg-[#273043]/50 shadow'
        }
      >
        {' '}
        {owner ? (
          <>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              ref={inputRef}
              onChange={handleOnImageChange}
            />
            <div
              className={
                showText
                  ? 'pointer-events-none absolute z-10 my-auto ml-32 mt-44 bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-xl font-black text-transparent transition-opacity'
                  : 'absolute z-10 my-auto ml-32 mt-44 bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-xl font-black text-transparent opacity-0 transition-opacity'
              }
            >
              Change Avatar
            </div>{' '}
          </>
        ) : null}
        <Image
          className={
            showText
              ? 'row-span-4 h-full w-full cursor-pointer rounded-full p-10 opacity-50 transition-opacity duration-300'
              : 'row-span-4 h-full w-full rounded-full p-10 duration-300'
          }
          src={process.env.NEXT_PUBLIC_API_URL + userInfo.avatar.location}
          alt="User avatar"
          width={0}
          height={0}
          sizes="100vw"
          unoptimized
          priority
          onLoad={() => {
            setIsLoading(!isLoading)
          }}
          onMouseEnter={owner ? onImageHover : undefined}
          onMouseLeave={owner ? onImageUnHover : undefined}
          onClick={
            owner
              ? () => {
                  inputRef.current!.click()
                }
              : undefined
          }
        />
        <div className="row-span-2 flex items-center justify-center text-5xl">
          {userInfo.username}
        </div>
        <div className="flex items-center justify-center text-xl">
          Role: {userInfo.role.description}
        </div>
        <div className="flex items-start justify-center text-xl">
          Register Date: {userInfo.created_at.toLocaleDateString()} at{' '}
          {userInfo.created_at.toLocaleTimeString()}
        </div>
      </div>
      {showModal ? (
        <Modal onModalClose={onModalClose}>
          <AvatarChanger
            image={image}
            accessToken={accessToken}
            onCropCancel={onModalClose}
          />
        </Modal>
      ) : null}
    </>
  )
}
