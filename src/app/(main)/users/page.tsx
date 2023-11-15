import { UsersFinder } from '@/components/usersFinder'
import { usersService } from '@/services'

export default async function UsersPage() {
  const res = await usersService.users.getAll()
  return <UsersFinder usersList={res.data} />
}
