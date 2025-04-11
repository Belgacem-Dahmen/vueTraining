<template>
    <div class="page">
      <div class="page-header">
        <button @click="appStore.toggleNavbar"> <AppIcon iconName="burger-menu.svg"/>  </button>
         <SearchInput />
      </div>

      <slot>
        
      </slot>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue';
  import { useAppStore } from '@/stores/appStore';
const props = defineProps<{
 }>();
  import { ref, defineEmits } from 'vue';
  import SearchInput from '@/components/Inputs/SearchInput.vue'
  import AppIcon from '@/components/AppIcon.vue'

  const appStore = useAppStore();

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
  