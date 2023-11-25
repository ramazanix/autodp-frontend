import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import { CustomButton } from './customButton'

function ImageCropper({ image, onCropDone, onCropCancel }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedArea, setCroppedArea] = useState(null)
  const aspectRatio = 1

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels)
  }

  return (
    <div className="flex h-full w-full items-end justify-center overflow-hidden">
      <div>
        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
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
        <CustomButton onClick={onCropCancel} text="Cancel" bgColor="red" />

        <CustomButton
          onClick={() => {
            onCropDone(croppedArea)
          }}
          bgColor="green"
          text="Done"
        />
      </div>
    </div>
  )
}

export default ImageCropper
