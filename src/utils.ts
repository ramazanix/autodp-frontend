import { FieldError } from '@/app/types'

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

export function dataURLtoFile(dataurl: string, filename: string) {
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
