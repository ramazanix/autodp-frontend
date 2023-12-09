import { PrivateWarning } from '@/components/privateWarning'
import { UserSettings } from '@/components/userSettings'
import { usersService } from '@/services'
import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'

export default async function UserSettingsPage({
  params,
}: {
  params: { username: string }
}) {
  const accessToken = cookies().get('accessToken')?.value

  if (accessToken) {
    const userInfo = await usersService.users.get(params.username, accessToken)
    const parsedJWT = jwtDecode(accessToken)
    const owner = params.username === parsedJWT.sub

    return <UserSettings userInfo={userInfo} accessToken={accessToken} />
  }
  return <PrivateWarning />
}
