<template>
    <div class="page">
      <button @click="toggleNavbar"> {{ isClosed ? "Open Navbar" : "Close Navbar" }} </button>
      <slot>
        
      </slot>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue';
    
  // You can define props or other reactive variables if needed
  
  const props = defineProps<{
    // Example of defining a prop with TypeScript types
    title: {
      type: String,
      required: false,
      default: 'Default Title'
    },
    toggleNavbar: () => void
  }>();
  import { ref, defineEmits } from 'vue';

// Define emit function to trigger the event
const emit = defineEmits<{
  (event: 'toggle-navbar', isClosed: boolean): void;
}>();

const isClosed = ref(true);
const toggleNavbar = () => {
  isClosed.value = !isClosed.value;
  console.log(isClosed.value);
  emit('toggle-navbar', isClosed.value);
};
  </script>
  
  <style scoped>
  .page {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
}
  </style>
  