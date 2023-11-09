import { usersService } from '@/services'
import { UserProfile } from '@/components/userProfile'

export default async function UserPage({
  params,
}: {
  params: { username: string }
}) {
  const userInfo = await usersService.user(params.username)
  return <>{userInfo && <UserProfile userInfo={userInfo!} />}</>
}
