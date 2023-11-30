import { FieldError } from '@/app/types'
import { Area } from 'react-easy-crop'

export function Capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function ParseFieldErrors(data: Array<FieldError>) {
  let result: { [key: string]: string } = {}

  data.map((field) => {
    let fieldName = field.loc.at(-1)
    result[fieldName!] = Capitalize(field.msg)
  })

  return result
}

export function parseDate(stringDate: string): Date {
  let arr = stringDate.split(' ')
  let date = arr[1].split('.')

  let temp = date[0]
  date[0] = date[1]
  date[1] = temp

  arr[1] = date.join('.')

  return new Date(arr.join(' '))
}

function dataURLtoFile(dataurl: string, filename: string): File {
  let arr = dataurl.split(',')
  let mime = arr[0].match(/:(.*?);/)![1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}

export function createCroppedImage(
  image: string,
  imgCroppedArea: Area
): Promise<File> {
  return new Promise((resolve, reject) => {
    const canvasEle = document.createElement('canvas')
    canvasEle.width = imgCroppedArea.width
    canvasEle.height = imgCroppedArea.height
    const context = canvasEle.getContext('2d')!

    let imageObj1 = new Image()
    imageObj1.src = image

    imageObj1.onload = () => {
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
      let croppedImageFile = dataURLtoFile(dataURL, 'avatar.jpg')
      resolve(croppedImageFile)
    }
  })
}
