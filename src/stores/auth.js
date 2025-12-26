import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api/api';

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token'))

  const login = async (payload) => {
    const res = await api.post('/auth/login', payload)
    token.value = res.data.token
    localStorage.setItem('token', res.data.token)
  }

  return{token, login}
});

