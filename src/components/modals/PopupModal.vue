<template>
  <transition name="fade">
    <div v-if="modelValue" class="overlay" @click.self="close"></div>
  </transition>

  <transition name="slide-right">
    <div v-if="modelValue" class="side-modal">
      <div class="modal-header">
        <div class="modal-header_text">
          <h3 class="title">{{ props.title }}</h3>
          <p class="description">This action cannot be undone. Deleting this brand will remove all associated data
            permanently. Are you sure
            you want to proceed?</p>

        </div>
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
/* Styles same as before */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.side-modal {
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 512px;
  height: auto;
  border-radius: 6px;
  background-color: white;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 24px;
  overflow-y: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.modal-header_text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title {
  font-weight: 600;
}

.description {
  color: #64748B;
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
  display: flex;
  gap: 6px;
  align-items: end;
  justify-content: end;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.scale-enter-from {
  transform: scale(0.95);
  opacity: 0;
}

.scale-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.scale-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>
