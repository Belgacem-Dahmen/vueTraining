<template>
  <button class="close-btn">X</button>
</template>

<script lang="ts" setup></script>

<style scoped>
.close-btn {
  width: 38px;
  border-radius: 6px;
  padding: 8px 10px;
  border: 1px solid #dadce0;
  transition: transform 0.1s ease; 
    }

    
    .close-btn:active {
      transform: scale(0.95); 
    }
</style>
