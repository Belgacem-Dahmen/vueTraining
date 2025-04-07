import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', () => {
    
  const isOpen = ref(true)
  function toggleNavbar() {
    isOpen.value = !isOpen.value
    
  }

  return { isOpen,toggleNavbar }
})
