import { Area } from 'react-easy-crop'
import ImageCropper from './imageCropper'
import { dataURLtoFile } from '@/utils'
import { usersService } from '@/services'

interface Props {
  image: string
  accessToken: string
  onCropCancel: () => void
}

export const AvatarChanger: React.FC<Props> = ({
  image,
  accessToken,
  onCropCancel,
}) => {
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

      let dataURL = canvasEle.toDataURL('image/jpeg')

      let postBody = new FormData()

      let croppedImageFile = dataURLtoFile(dataURL, 'avatar.jpg')
      postBody.append('file', croppedImageFile)
      usersService.users
        .uploadAvatar(postBody, accessToken)
        .then((res) => {
          window.location.reload()
        })
        .catch((e) => console.log(e))
        .finally(() => {
          onCropCancel()
        })
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
