<template>
  <transition name="fade">
    <div v-if="modelValue" class="overlay" @click.self="close"></div>
  </transition>

  <transition name="slide-right">
    <div v-if="modelValue" class="side-modal">
      <div class="modal-header">
        <button @click="close" class="close-button">&times;</button>
      </div>
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {  defineEmits } from 'vue'

const props = defineProps<{
  modelValue: boolean
  title?: string
}>()

const emit = defineEmits(['update:modelValue'])

const close = () => emit('update:modelValue', false)
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.side-modal {
  position: fixed;
  top: 0;
  right: 0;
  width: auto;
  height: auto;
  background-color: white;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: scroll;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.close-button {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}
.modal-content {
  margin-top: 20px;
  flex-grow: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-right-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-right-leave-active {
  transition: transform 0.3s ease-in;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
