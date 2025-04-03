<script setup lang="ts">
import ProjectAssign from '@/components/ProjectAssign.vue'
import ProjectModal from '@/components/modals/ProjectModal.vue'
import NoteModal from '@/components/modals/NoteModal.vue'
</script>

<template>
  <main>
    <ProjectAssign />
    <ProjectModal title="Create Project" />
    <NoteModal />
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
}
</style>
