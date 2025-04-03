<template>
  <div class="input-container">
    <label :for="props.label">{{ label }}</label>
    <input :name="label" :placeholder="placeholder" :type="type" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Define props with TypeScript
interface Props {
  label: string
  type?: string
  placeholder?: string
}

// Declare the props and their types
const props = defineProps<Props>()
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
}
input {
  width: 350px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  font-size: 12px;
}
</style>
