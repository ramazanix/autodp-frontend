import React, { useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'
import { CustomButton } from './customButton'

interface Props {
  image: string
  onCropDone: (imgCroppedArea: Area) => void
  onCropCancel: () => void
}

const ImageCropper: React.FC<Props> = ({ image, onCropDone, onCropCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedArea, setCroppedArea] = useState<Area>()

  const onCropComplete = (
    croppedAreaPercentage: Area,
    croppedAreaPixels: Area
  ) => {
    setCroppedArea(croppedAreaPixels)
  }

  return (
    <div className="flex h-fit w-fit flex-col items-center justify-center overflow-hidden">
      <Cropper
        image={image}
        aspect={1}
        crop={crop}
        zoom={zoom}
        cropShape="round"
        showGrid={false}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
        classes={{
          containerClassName:
            'flex mx-auto my-[2em] max-w-[25vw] w-full h-[70%] rounded-2xl bg-black',
        }}
      />
      <div className="relative mt-[65vh] flex gap-x-8">
        <CustomButton
          onClick={onCropCancel}
          text="Cancel"
          bgColor="red"
          type_="button"
        />

        <CustomButton
          onClick={() => {
            onCropDone(croppedArea!)
          }}
          bgColor="green"
          text="Done"
          type_="button"
        />
      </div>
    </div>
  )
}

export default ImageCropper
