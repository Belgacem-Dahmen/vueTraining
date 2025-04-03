<template>
  <button
    class="mainButton"
    :style="{
      backgroundColor: bgColor,
      color: textColor,
    }"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

// Define props with TypeScript
interface Props {
  text: string
  bgColor?: string // Optional background color
  textColor?: string // Optional text color
}

// Declare the props and their types
const props = defineProps<Props>()

// Destructure props for easier use
const { text, bgColor = '#5568fd', textColor = '#fff' } = props
</script>

<style scoped>
.mainButton {
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #dadce0;
  cursor: pointer;
}
</style>
