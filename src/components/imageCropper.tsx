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
    <div className="flex h-full w-full items-end justify-center overflow-hidden">
      <div>
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
          style={{
            containerStyle: {
              width: '60%',
              height: '75%',
              backgroundColor: '#637da6',
              marginRight: 'auto',
              marginLeft: 'auto',
              borderRadius: '.5rem',
              marginTop: '4rem',
            },
          }}
        />
      </div>

      <div className="flex gap-x-8 pb-10">
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
