import React from 'react'
import UserIcon from '../../public/userIcon.svg'

enum ColorThemes {
  red = 'border-1 duration-300 focus:ring focus:border-red-50 focus:ring-rose-400/90',
  yellow = 'border-1 duration-300 focus:ring focus:border-orange-50 focus:ring-yellow-400/90',
  green = 'border-1 duration-300 focus:ring focus:border-green-50 focus:ring-emerald-400/90',
  blue = 'border-1 duration-300 focus:ring focus:border-blue-50 focus:ring-blue-400/90',
  standard = 'border-2 border-gray-300',
}

interface Props {
  id: string
  name: string
  placeholder: string
  value: string
  onChange: React.ChangeEventHandler<Element>
  color?: keyof typeof ColorThemes
}

export const SearchBar: React.FC<Props> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  color = 'standard',
}) => {
  return (
    <div className="relative mx-auto pt-10 text-gray-600">
      <div className="pointer-events-none absolute inset-0 flex items-center pl-3 pt-10">
        <UserIcon className="h-4 w-4 fill-gray-600" />
      </div>
      <input
        className={`h-10 rounded-lg bg-white px-5 pl-8 text-sm focus:outline-none ${ColorThemes[color]}`}
        type={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
