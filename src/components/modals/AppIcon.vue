<template>
    <img class="icon" :src="iconPath" alt="" />
    <img class="icon" src="@/assets/icons/edit-icon.svg" alt="" />
  </template>
  
  <style scoped>
  .icon {
    width: 16px;
  }
  </style>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  // Define props with TypeScript
  interface Props {
    iconName: string;
  }
  
  // Declare the props and their types
  const props = defineProps<Props>();
  
  // Define a ref to store the icon path
  const iconPath = ref<string>('');
  
  // Dynamically import the icon when the component is mounted
  onMounted(() => {
    import(`@/assets/icons/${props.iconName}-icon.svg`)
      .then(module => {
        iconPath.value = module.default; // Get the default export (resolved path)
      })
      .catch(err => {
        console.error('Icon not found:', err);
      });
  });
  </script>