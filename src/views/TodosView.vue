<template>
  <h1>TO DO :</h1>
  <BaseButton text="add new todo" @click="openModal" />
  <BaseLoader v-if="isLoading" />
  <div v-else class="todoSWrapper">
    <div class="" v-for="todo in todosStore.todos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>

  <RightSideModal v-model="showModal">
    <NoteModal />
  </RightSideModal>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import RightSideModal from '@/components/modals/SlideModal.vue'
import { useTodosStore } from '@/stores/todosStore'
import TodoItem from '@/components/TodoItem.vue'
import NoteModal from '@/components/modals/NoteModal.vue'
import BaseButton from '@/components/buttons/BaseButton.vue'
import BaseLoader from '@/components/BaseLoader.vue'

const isLoading = ref(true)
const showModal = ref(false)
const openModal = () => (showModal.value = true)
const todosStore = useTodosStore()

onMounted(async () => {
  await todosStore.getTodos()
  isLoading.value = false
})
</script>

<style>
.todoSWrapper {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-gap: 20px;
}
</style>
