import React from 'react'

interface Props {
  id: string
  text: string
  inputType: string
  placeholder: string
  required: boolean
  name?: string
}

export const CustomInput: React.FC<Props> = ({
  id,
  text,
  inputType,
  placeholder,
  required,
  name,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={
          'text-l mb-2 block font-medium text-gray-900 ' +
          (required
            ? "after:ml-0.5 after:text-red-400 after:content-['*']"
            : '')
        }
      >
        {text}
      </label>
      <input
        type={inputType}
        id={id}
        name={name ? name : id}
        className="box-shadow block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-[inset_0_0_0px_1000px_rgb(249,250,251)] duration-300 selection:bg-blue-200 focus:border-amber-50 focus:outline-none focus:ring focus:ring-red-300/90"
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}
