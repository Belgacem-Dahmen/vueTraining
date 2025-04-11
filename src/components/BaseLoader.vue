<template>
  <div class="loader-wrapper">
    <div class="loader"></div>
  </div>
</template>

<script setup lang="ts">
// No props needed by default
</script>

<style scoped>
.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.loader {
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #007bff; /* Customize with your primary color */
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
