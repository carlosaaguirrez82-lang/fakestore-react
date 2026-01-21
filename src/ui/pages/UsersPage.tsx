import { useEffect, useState } from 'react'
import { userApi } from '../../infrastructure/api/userApi'
import MainLayout from '../layouts/MainLayout'
import type { User } from '../../domain/models/User'

const UsersPage = () => {
 const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    userApi.getAll().then(setUsers)
    }, [])

// useEffect(() => {
//   let isMounted = true

//   const loadUsers = async () => {
//     const data = await userApi.getAll()
//     if (isMounted) {
//       setUsers(data)
//     }
//   }

//   loadUsers()

//   return () => {
//     isMounted = false
//   }
// }, [])

  return (
    <MainLayout>
      <h2>Usuarios</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.username}</li>
        ))}
      </ul>
    </MainLayout>
  )
}

export default UsersPage;
