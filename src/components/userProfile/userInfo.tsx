import { IUser } from '@/app/types'

interface Props {
  userInfo: IUser
}

export const UserInformation: React.FC<Props> = ({ userInfo }) => {
  return (
    <>
      <div className="row-span-2 flex items-center justify-center text-5xl">
        {userInfo.username}
      </div>
      <div className="flex items-center justify-center text-xl">
        Role: {userInfo.role.description}
      </div>
      <div className="flex items-start justify-center text-xl">
        Register Date: {userInfo.created_at.toLocaleDateString()} at{' '}
        {userInfo.created_at.toLocaleTimeString()}
      </div>
    </>
  )
}
