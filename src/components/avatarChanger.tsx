import { useState } from 'react'
import { Area } from 'react-easy-crop'
import ImageCropper from './imageCropper'

interface Props {
  image: string
  onCropCancel: () => void
}

export const AvatarChanger: React.FC<Props> = ({ image, onCropCancel }) => {
  const [imgAfterCrop, setImgAfterCrop] = useState('')

  const onCropDone = (imgCroppedArea: Area) => {
    const canvasEle = document.createElement('canvas')
    canvasEle.width = imgCroppedArea.width
    canvasEle.height = imgCroppedArea.height

    const context = canvasEle.getContext('2d')

    let imageObj1 = new Image()
    imageObj1.src = image
    imageObj1.onload = function () {
      context!.drawImage(
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
    }
  }

  return (
    <div className="flex h-fit max-h-[70vh] w-fit items-center justify-center">
      <ImageCropper
        image={image}
        onCropDone={onCropDone}
        onCropCancel={onCropCancel}
      />
    </div>
  )
}
