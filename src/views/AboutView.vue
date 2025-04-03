<script setup lang="ts">
import ProjectAssign from '@/components/ProjectAssign.vue';
import ProjectModal from '@/components/ProjectModal.vue';

</script>

<template>
  <main>
    <ProjectAssign />
    <ProjectModal title="Create Project"/>
  </main>
  
</template>

<style>
main {
 display: flex;
 gap: 20px;
 padding: 50px;
}
</style>
