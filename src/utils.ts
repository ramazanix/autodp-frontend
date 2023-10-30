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
