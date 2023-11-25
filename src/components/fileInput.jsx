import React, { useRef } from 'react'
import { CustomButton } from './customButton'

function FileInput({ onImageSelected }) {
  const inputRef = useRef()

  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = function (e) {
        onImageSelected(reader.result)
      }
    }
  }

  const onChooseImg = () => {
    inputRef.current.click()
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
