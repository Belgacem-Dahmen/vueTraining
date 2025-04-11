<template>
  <main>
    <h1>Demandes</h1>
    <BaseButton text="Add project" @click="openModal" />
  
    <RightSideModal v-model="showModal">
      <p>This content comes from the parent.</p>
    </RightSideModal>
  </main>
  
  </template>
  <script setup lang="ts">
  import { ref } from 'vue'
  import RightSideModal from '@/components/modals/SlideModal.vue'
import BaseButton from '@/components/buttons/BaseButton.vue'
  
  const showModal = ref(false)
  const openModal = () => (showModal.value = true)
  </script>

  <style scoped>
  .main {
  
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>