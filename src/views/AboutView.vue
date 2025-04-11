<script setup lang="ts">
import BaseLoader from '@/components/BaseLoader.vue'
import NoteModal from '@/components/modals/NoteModal.vue'
</script>

<template>
  <div class="main">
    <BaseLoader isLoading="true" />
    <h1>A propos</h1>
    <NoteModal />
  </div>
</template>

<style scoped>
.main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
