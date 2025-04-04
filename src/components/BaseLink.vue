<template>

    <RouterLink :to="to">
        <div class="link-container">
           <AppIcon :iconName="edit" />
          <p class="link">{{ text }}</p>
        </div>
      
    </RouterLink>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router';
import AppIcon from './modals/AppIcon.vue';
  
  // Define props with TypeScript interface
  interface Props {
    text?: string;
    to?: string;
  }
  
  // Destructure props directly in the setup function
  const { text, to } = defineProps<Props>();
  </script>
  
<style>
a {
    text-decoration: none;
    margin: 0;padding: 0;
}
.link-container {
    display: flex;
    align-items: center;
    gap:16px;
    margin-left: 20px;
}
</style>