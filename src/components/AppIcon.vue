<template>
    <img class="icon" :src="iconSrc" alt="" />
  </template>
  
  <style scoped>
  .icon {
    width: 16px;
  }
  </style>
  
  <script setup lang="ts">
  import { ref, computed,onMounted } from 'vue';
  
  // Define props with TypeScript
  interface Props {
    iconName: string;
  }
  
  // Declare the props and their types
  const props = defineProps<Props>();
  
  // Define a ref to store the icon path
  const iconPath = ref<string>('');
    const iconSrc = computed(() => {
      // Dynamically create the path to the icon
      
       return new URL(`../assets/icons/${props.iconName}`, import.meta.url).href;
       
    });
  // Dynamically import the icon when the component is mounted
  onMounted(() => {});
  </script>