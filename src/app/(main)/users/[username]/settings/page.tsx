import { PrivateWarning } from '@/components/privateWarning'
import { UserSettings } from '@/components/userSettings'
import { usersService } from '@/services'
import { cookies } from 'next/headers'

export default async function UserSettingsPage({
  params,
}: {
  params: { username: string }
}) {
  const accessToken = cookies().get('accessToken')?.value

  if (accessToken) {
    const userInfo = await usersService.users.get(params.username, accessToken)

    return <UserSettings userInfo={userInfo} accessToken={accessToken} />
  }
  return <PrivateWarning />
}
