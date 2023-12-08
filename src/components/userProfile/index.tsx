'use client'

import { IUser } from '@/app/types'
import { useRef, useState } from 'react'
import { UserProfileSkeleton } from './skeleton'
import { Modal } from '../modal'
import { AvatarChanger } from '../avatarChanger'
import { useRouter } from 'next/navigation'
import { UserProfileBox } from '../userProfileBox'
import { UserAvatarChangeArea } from '../userAvatarChangeArea'
import { UserAvatar } from '../userAvatar'
import { UserInformation } from './userInfo'

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
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [showText, setShowText] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [image, setImage] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onModalClose = () => {
    setShowModal(false)
    setImage('')
  }

  const handleSettingsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push(`${userInfo.username}/settings`)
  }

  return (
    <>
      <UserProfileSkeleton isLoading={isLoading} />
      <UserProfileBox isLoading={isLoading}>
        <UserAvatarChangeArea
          owner={owner}
          reference={inputRef}
          setImage={setImage}
          setShowModal={setShowModal}
          showText={showText}
          onSettingsClick={handleSettingsClick}
        />
        <UserAvatar
          inputRef={inputRef}
          owner={owner}
          userInfo={userInfo}
          showText={showText}
          setIsLoading={setIsLoading}
          setShowText={setShowText}
        />
        <UserInformation userInfo={userInfo} />
      </UserProfileBox>
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
