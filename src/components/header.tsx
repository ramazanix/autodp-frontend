import AutoDP from '../../public/autodp.svg'
import Link from 'next/link'
import { IUser } from '@/app/types'
import React from 'react'
import { useLogout } from '@/hooks/useLogout'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
interface Props {
  user: IUser | null
  userIsLoading: boolean
}

export const Header: React.FC<Props> = ({ user, userIsLoading }) => {
  const router = useRouter()
  const { logout } = useLogout()
  const pathname = usePathname()
  const linkBaseClass = 'flex transform transition duration-300 '
  const linkActive = 'hover:-translate-y-0.5'
  const linkDisabled = 'cursor-default pointer-events:none'
  const linkStatuses = {
    home:
      'group/logo ' +
      linkBaseClass +
      (pathname !== '/' ? linkActive : linkDisabled),
    users: linkBaseClass + (pathname !== '/users' ? linkActive : linkDisabled),
    posts: linkBaseClass + (pathname !== '/posts' ? linkActive : linkDisabled),
    profile:
      linkBaseClass +
      (pathname !== `/users/${user?.username}` ? linkActive : linkDisabled),
  }

  const handleLogout = () => {
    logout().then(() => router.push('/login'))
  }

  return (
    <>
      <header className="container mx-auto max-w-full text-2xl font-bold">
        <nav className="flex max-h-20 flex-row flex-nowrap justify-start rounded-b-lg bg-[#273043]/80 py-1 text-[#EFF6EE]">
          <div className="flex basis-1/4 flex-row">
            <Link href="/" className={linkStatuses.home}>
              <div className="flex bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text">
                <AutoDP className="transform fill-[#EFF6EE] transition duration-300 group-hover/logo:fill-orange-400" />
                <span className="m-auto duration-300 group-hover/logo:text-transparent">
                  AutoDP
                </span>
              </div>
            </Link>
          </div>
          <div className="flex basis-2/4 flex-row text-xl font-semibold">
            <div className="flex basis-1/2 flex-row">
              <div className="m-auto">
                <Link href={'/users'} className={linkStatuses.users}>
                  <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text duration-300 hover:text-transparent">
                    Users
                  </span>
                </Link>
              </div>
              <div className="m-auto">
                <Link href={'/posts'} className={linkStatuses.posts}>
                  <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text duration-300 hover:text-transparent">
                    Posts
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {userIsLoading ? (
            ''
          ) : user ? (
            <div className="flex basis-1/4 flex-row text-xl font-semibold">
              <div className="m-auto ml-24 flex basis-1/2 justify-end">
                <Link
                  href={`/users/${user?.username}`}
                  className={linkStatuses.profile}
                >
                  <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text duration-300 hover:text-transparent">
                    My Profile
                  </span>
                </Link>
              </div>
              <div className="m-auto -ml-10 flex basis-1/2 justify-end pr-5">
                <button
                  className="transform bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text transition duration-300 hover:-translate-y-0.5 hover:text-transparent"
                  onClick={handleLogout}
                >
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex basis-1/4 flex-row text-xl font-semibold">
              <div className="m-auto ml-24 flex basis-1/2 justify-end">
                <Link
                  href={'/login'}
                  className="flex transform transition duration-300 hover:-translate-y-0.5"
                >
                  <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text duration-300 hover:text-transparent">
                    Sign In
                  </span>
                </Link>
              </div>
              <div className="m-auto -ml-10 flex basis-1/2 justify-end pr-5">
                <Link
                  href={'/register'}
                  className="flex transform transition duration-300 hover:-translate-y-0.5"
                >
                  <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text duration-300 hover:text-transparent">
                    Sign Up
                  </span>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
