<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectAssign from '@/components/ProjectAssign.vue'
import ProjectModal from '@/components/modals/ProjectModal.vue'
import BaseButton from '@/components/buttons/BaseButton.vue'
import RightSideModal from '@/components/modals/SlideModal.vue'
import { ref } from 'vue'

const showModal = ref(false)
const openModal = () => (showModal.value = true)
</script>

<template>
  <div class="main">
    <BaseButton text="Add project" @click="openModal" />
    <RightSideModal v-model="showModal">
      <ProjectModal title="Create Project" />
    </RightSideModal>
    <ProjectCard />
    <ProjectAssign />
    <ProjectModal title="Edit Project" />
  </div>
</template>
<style>
.main {
  background: rgb(163, 161, 182);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
