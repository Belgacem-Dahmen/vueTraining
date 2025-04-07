<template>
    <div class="page">
      <div class="page-header">
        <button> <AppIcon iconName="burger-menu.svg"/>  </button>
         <SearchInput />
      </div>

      <slot>
        
      </slot>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue';
    
  // You can define props or other reactive variables if needed
  
  const props = defineProps<{
    
    
  }>();
  import { ref, defineEmits } from 'vue';
  import SearchInput from '@/components/Inputs/SearchInput.vue'
  import AppIcon from '@/components/AppIcon.vue'

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
.page-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
button {
  display: flex;align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
}
  </style>
  