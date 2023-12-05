import { Area } from 'react-easy-crop'
import ImageCropper from './imageCropper'
import { createCroppedImage } from '@/utils'
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
    createCroppedImage(image, imgCroppedArea).then((croppedImageFile) => {
      let postBody = new FormData()
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
    })
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
