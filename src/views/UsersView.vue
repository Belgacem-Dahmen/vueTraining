<script setup lang="ts">

import ProjectModal from '@/components/modals/ProjectModal.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import RightSideModal from '@/components/modals/SlideModal.vue';
import { onMounted, ref } from 'vue';
import { useUsersStore } from '@/stores/usersStore';
import { storeToRefs } from 'pinia';
import BaseLoader from '@/components/BaseLoader.vue';
import AppTable from '@/components/AppTable.vue';
import PopupModal from '@/components/modals/PopupModal.vue';

const usersStore = useUsersStore()

const { users, token, user } = storeToRefs(useUsersStore())

const isLoading = ref(true)
const showAddModal = ref(false)
const showEditModal = ref(false)
const showDeleteModal = ref(false)
const openAddModal = () => (showAddModal.value = true)
const openEditModal = () => (showEditModal.value = true)
const openDeleteModal = () => (showDeleteModal.value = true)
const userColumns = ref([
  { key: 'id', label: 'ID' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
]);
onMounted(async () => {
  await usersStore.fetchUsers()
  isLoading.value = false
})

</script>

<template>
  <div class="main">
    <h1>Users Page</h1>
    <BaseButton text="Add user" @click="openAddModal" />
    <RightSideModal v-model="showAddModal">
      <ProjectModal title="Create User" />
    </RightSideModal>
    <h2>List of Users : </h2>
    <BaseLoader v-if="isLoading" />
    <AppTable v-else :rows="users" :columns="userColumns">

      <template #actions="{ row }">
        <BaseButton text="edit" @click="openEditModal">Edit</BaseButton>
        <BaseButton text="delete" @click="openDeleteModal">Delete</BaseButton>
      </template>

    </AppTable>
  </div>
  <RightSideModal v-model="showEditModal">
    <ProjectModal title="edit User" />
  </RightSideModal>

  <PopupModal v-model="showDeleteModal" title="Do you want to delete this user ?">
    <BaseButton text="Cancel" bgColor="#fff" textColor="black" />
    <BaseButton text="Delete" bgColor="#F64C4C" />
  </PopupModal>
</template>
<style>
.main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
