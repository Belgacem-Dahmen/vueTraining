<template>

    <RouterLink :to="to">
        <div class="link-container">
           <AppIcon :iconName="iconName" />
          <p class="link">{{ text }}</p>
        </div>
      
    </RouterLink>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router';
import AppIcon from './AppIcon.vue';
  
  // Define props with TypeScript interface
  interface Props {
    text?: string;
    to?: string;
    iconName : string;
  }
  
  // Destructure props directly in the setup function
  const { text, to, iconName } = defineProps<Props>();
  </script>
  
<style>
a {
    text-decoration: none;
    text-transform: capitalize;
    margin: 0;padding: 0;
}
.link-container {
    display: flex;
    align-items: center;
    gap:16px;
    margin-left: 20px;
}
</style>