import {  ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/types/User'

export const useUsersStore = defineStore('usersStore', () => {
  const users = ref<User[]>([])
  const user = ref<User>()
  const total = ref(0)
  const skip = ref(0)
  const limit = ref(10)
  const token = ref()
const fetchUsers = async ()=> {
    try {
        const res = await fetch('https://dummyjson.com/users')
        const data = await res.json() 
        users.value = data.users
        skip.value = data.skip
        total.value = data.total
    } catch (error) {
        console.error(error)
    }
}
const getAuth = async () => {
    try {
        const res = await fetch('https://dummyjson.com/user/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer${token.value}`,
    },
    credentials: 'include' 
  })
    const data = res.json()
    console.log(data);
    } catch (error) {
        console.error('cant get the authenticated user',error)
    }
} 
const login = async (payload) => {
    try {
        const res = await fetch('https://dummyjson.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: payload.username,
              password: payload.password,
            }),
          })
          const data = await res.json()
         user.value = data
         token.value = user.value?.accessToken
    } catch (error) {
        console.error(error)
    }
}

return { users,user, token,total,skip, limit, fetchUsers, login ,getAuth}
})