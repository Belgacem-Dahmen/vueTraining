<template>
  <button @click="openModal" class="open-button">Show Modal</button>

  <RightSideModal v-model="showModal">
    <p>This content comes from the parent.</p>
  </RightSideModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RightSideModal from '@/components/modals/SlideModal.vue'

const showModal = ref(false)
const openModal = () => (showModal.value = true)
</script>

<style scoped>
.open-button {
  padding: 10px 20px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.open-button:hover {
  background-color: #1565c0;
}
</style>

