import React, { useRef } from 'react'
import { CustomButton } from './customButton'

interface Props {
  onImageSelected: (selectedImg: string) => void
}

const FileInput: React.FC<Props> = ({ onImageSelected }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = function (e) {
        onImageSelected(reader.result?.toString()!)
      }
    }
  }

  const onChooseImg = () => {
    inputRef.current!.click()
  }

  return (
    <div>
      <input
        type="file"
        className="hidden"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnChange}
      />

      <CustomButton
        onClick={onChooseImg}
        text="Choose Image"
        bgColor="blue"
        type_="button"
      />
    </div>
  )
}

export default FileInput
