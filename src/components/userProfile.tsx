import { IUser } from '@/app/types'

interface Prop {
  userInfo: IUser
}

export const UserProfile: React.FC<Prop> = ({ userInfo }) => {
  return (
    <div className="mx-6 my-6 grid grid-cols-5 gap-5 rounded bg-[#273043]/50 shadow">
      <div className="col-span-2 mt-10">
        <p className="text-center text-2xl">{userInfo.username}</p>
      </div>
      <div className="col-span-3"></div>
      <div className="col-span-2 text-center text-xl">
        Role: {userInfo.role.name}
      </div>
      <div className="col-span-4"></div>
      <div className="col-span-2 text-center text-xl">
        Register Date: {userInfo.created_at.toLocaleDateString()} at{' '}
        {userInfo.created_at.toLocaleTimeString()}
      </div>
    </div>
  )
}
