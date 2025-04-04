<template>
  <div class="input-container">
    <label :for="props.label">{{ label }}</label>
    <textarea type="text" :name="label" :placeholder="placeholder"></textarea>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Define props with TypeScript
interface Props {
  label: string
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
textarea {
  width: 100%;
  height: 144px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
textarea:focus {
  border-color: blue;
  outline: none;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  font-size: 12px;
}

textarea::placeholder {
  color: gray;
  font-family: inherit;
}
</style>
