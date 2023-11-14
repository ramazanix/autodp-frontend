import { usersService } from '@/services'
import { IUser } from '@/app/types'
import { useEffect, useState } from 'react'

interface Props {
  limit?: number
}

export const useUsers = (props: Props) => {
  const [usersList, setUsersList] = useState<IUser[] | null>([])
  const { limit } = props
  useEffect(() => {
    usersService.users
      .getAll(limit)
      .then((res) => setUsersList(res.data))
      .catch((e) => console.log(e))
  }, [limit])

  return { usersList }
}
