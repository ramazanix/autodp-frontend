import Logo from '../../public/logo.svg'
import Link from 'next/link'
import React from 'react'

export const LogoLink: React.FC = () => {
  return (
    <Link
      href="/"
      className="mb-4 flex items-center text-2xl font-semibold text-gray-900"
    >
      <Logo className="h-full w-full fill-white" alt="AutoDP" />
    </Link>
  )
}
