import React from 'react'

enum BackgroundColorsStyles {
  red = 'checked:bg-red-400 checked:hover:bg-red-400 focus:checked:bg-red-400',
  yellow = 'checked:bg-yellow-400 checked:hover:bg-yellow-400 focus:checked:bg-yellow-400',
  green = 'checked:bg-emerald-400 checked:hover:bg-emerald-400 focus:checked:bg-emerald-400',
  blue = 'checked:bg-blue-400 checked:hover:bg-blue-400 focus:checked:bg-blue-400',
}

interface Props {
  id: string
  ariaDescribedby?: string
  text: string
  bgColor?: keyof typeof BackgroundColorsStyles
}

export const CustomCheckbox: React.FC<Props> = ({
  id,
  ariaDescribedby,
  text,
  bgColor = 'red',
}) => {
  return (
    <>
      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            type="checkbox"
            id={id}
            aria-describedby={ariaDescribedby ? ariaDescribedby : id}
            className={`h-4 w-4 cursor-pointer rounded border border-gray-500 duration-200  focus:ring-0 focus:ring-offset-0 ${BackgroundColorsStyles[bgColor]}`}
          />
        </div>
        <div className="-mb-1 ml-2 inline-flex align-top text-sm">
          <label htmlFor="remember" className="text-gray-500">
            {text}
          </label>
        </div>
      </div>
    </>
  )
}
