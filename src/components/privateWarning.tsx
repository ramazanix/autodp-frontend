'use client'

import { usePathname, useRouter } from 'next/navigation'

export const PrivateWarning: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const handleRedirect = () => {
    router.refresh()
    router.replace(`/login?backRef=${pathname}`)
  }
  return (
    <div className="mt-20 flex select-none flex-col items-center justify-center">
      <div className="mt-0 w-full max-w-md space-y-5 rounded-lg bg-[#273043]/50 p-0 py-6 text-center shadow">
        <div className="text-2xl capitalize">{"It's a private territory"}</div>
        <div className="font-light">
          Please{' '}
          <span
            className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text font-bold text-transparent decoration-transparent hover:cursor-pointer"
            onClick={handleRedirect}
          >
            authorize
          </span>
        </div>
      </div>
    </div>
  )
}
