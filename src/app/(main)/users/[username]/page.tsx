import { usersService } from '@/services'
import { UserProfile } from '@/components/userProfile'
import { PrivateWarning } from '@/components/privateWarning'
import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'

export default async function UserPage({
  params,
}: {
  params: { username: string }
}) {
  const accessToken = cookies().get('accessToken')?.value

  if (accessToken) {
    const userInfo = await usersService.users.get(params.username, accessToken)
    const parsedJWT = jwtDecode(accessToken)

    return (
      <UserProfile
        userInfo={userInfo}
        owner={params.username === parsedJWT.sub}
        accessToken={accessToken}
      />
    )
  }

  return <PrivateWarning />
}
