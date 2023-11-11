import { usersService } from '@/services'
import { UserProfile } from '@/components/userProfile'
import { PrivateWarning } from '@/components/privateWarning'
import { cookies } from 'next/headers'

export default async function UserPage({
  params,
}: {
  params: { username: string }
}) {
  const accessToken = cookies().get('accessToken')?.value

  if (accessToken) {
    const userInfo = await usersService
      .setBearerAuth(accessToken)
      .users.get(params.username)

    return <>{<UserProfile userInfo={userInfo!} />}</>
  } else return <PrivateWarning />
}
