'use client'

import { useState } from 'react'
import FileInput from '@/components/fileInput'
import ImageCropper from '@/components/imageCropper'
import { CustomButton } from '@/components/customButton'
import { usersService } from '@/services'
import Cookies from 'js-cookie'
import { dataURLtoFile } from '@/utils'
import { Area } from 'react-easy-crop'

export default function TestPage() {
  const accessToken = Cookies.get('accessToken')!
  const [image, setImage] = useState('')
  const [currentPage, setCurrentPage] = useState('choose-img')
  const [imgAfterCrop, setImgAfterCrop] = useState('')

  // Invoked when new image file is selected
  const onImageSelected = (selectedImg: string) => {
    setImage(selectedImg)
    setCurrentPage('crop-img')
  }

  // Generating Cropped Image When Done Button Clicked
  const onCropDone = (imgCroppedArea: Area) => {
    const canvasEle = document.createElement('canvas')
    canvasEle.width = imgCroppedArea.width
    canvasEle.height = imgCroppedArea.height

    const context = canvasEle.getContext('2d')!

    let imageObj1 = new Image()
    imageObj1.src = image
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      )

      const dataURL = canvasEle.toDataURL('image/jpeg')

      setImgAfterCrop(dataURL)
      setCurrentPage('img-cropped')
      let postBody = new FormData()

      let croppedImageFile = dataURLtoFile(dataURL, 'avatar.jpg')
      postBody.append('file', croppedImageFile)
      usersService.users
        .uploadAvatar(postBody, accessToken)
        .then((res) => {
          console.log(res)
        })
        .catch((e) => console.log(e))
    }
  }

  // Handle Cancel Button Click
  const onCropCancel = () => {
    setCurrentPage('choose-img')
    setImage('')
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {currentPage === 'choose-img' ? (
        <FileInput onImageSelected={onImageSelected} />
      ) : currentPage === 'crop-img' ? (
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      ) : (
        <div>
          <div>
            <img src={imgAfterCrop} className="h-80 w-80 object-contain" />
          </div>

          <CustomButton
            onClick={() => {
              setCurrentPage('crop-img')
            }}
            type_="button"
            text="Crop"
          />

          <CustomButton
            onClick={() => {
              setCurrentPage('choose-img')
              setImage('')
            }}
            type_="button"
            text="New Image"
          />
        </div>
      )}
    </div>
  )
}
