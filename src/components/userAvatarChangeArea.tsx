import { Dispatch, SetStateAction } from 'react'
import { twJoin } from 'tailwind-merge'
import { SettingsIcon } from './buttonIcons/settingsIcon'

interface Props {
  owner: boolean
  reference: React.RefObject<HTMLInputElement>
  setShowModal: Dispatch<SetStateAction<boolean>>
  setImage: Dispatch<SetStateAction<string>>
  showText: boolean
  onSettingsClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const UserAvatarChangeArea: React.FC<Props> = ({
  owner,
  reference,
  setImage,
  setShowModal,
  showText,
  onSettingsClick,
}) => {
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
      {owner ? (
        <>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            ref={reference}
            onChange={handleOnImageChange}
          />
          <div
            className={twJoin(
              'absolute z-10 my-auto ml-32 mt-44 bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-xl font-black text-transparent transition-opacity',
              showText ? 'pointer-events-none' : 'opacity-0'
            )}
          >
            Change Avatar
          </div>
          <SettingsIcon onClick={onSettingsClick} />
        </>
      ) : null}
    </>
  )
}
