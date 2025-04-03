<script setup lang="ts">
import SearchInput from '@/components/Inputs/SearchInput.vue'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <main>
    <SearchInput />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </main>
</template>
<style>
main {
  display: flex;
  gap: 20px;
  align-content: center;
  justify-content: center;
}
</style>
