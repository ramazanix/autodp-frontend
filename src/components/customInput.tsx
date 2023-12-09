import { HTMLInputTypeAttribute } from 'react'
import { twJoin } from 'tailwind-merge'

enum BackgroundColorsStyles {
  red = 'focus:border-amber-50 focus:ring-red-300/90',
  yellow = 'focus:border-yellow-50 focus:ring-yellow-300/90',
  green = 'focus:border-emerald-50 focus:ring-emerald-300/90',
  blue = 'focus:border-blue-50 focus:ring-blue-300/90',
}

interface Props {
  id: string
  text: string
  textColor?: string
  inputType: HTMLInputTypeAttribute
  placeholder?: string
  required?: boolean
  value: string
  color?: keyof typeof BackgroundColorsStyles
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  minLength?: number
  maxLength?: number
}

export const CustomInput: React.FC<Props> = ({
  id,
  text,
  textColor = 'text-gray-900',
  inputType,
  placeholder,
  required = false,
  value,
  color = 'blue',
  handleChange,
  name = id,
  minLength,
  maxLength,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={twJoin(
          'text-l mb-2 block font-medium',
          textColor,
          required && "after:ml-0.5 after:text-red-400 after:content-['*']"
        )}
      >
        {text}
      </label>
      <input
        type={inputType}
        id={id}
        name={name}
        className={twJoin(
          'box-shadow block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-[inset_0_0_0px_1000px_rgb(249,250,251)] duration-300 focus:outline-none focus:ring',
          BackgroundColorsStyles[color]
        )}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => handleChange(e)}
        autoComplete={'on'}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  )
}
