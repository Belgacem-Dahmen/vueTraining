<template>
  <div class="project-assign">
    <h2>Bulk Project assign</h2>
    <div class="project-input">
      <p>Assigned to</p>
      <select name="assignTo" id="assignTo">
        <option value="first">First Value</option>
        <option value="second" selected>Second Value</option>
        <option value="third">Third Value</option>
      </select>
    </div>
    <div class="modal-btns">
      <BaseButton text="Cancel" bg-color="#ffff" textColor="dark" />
      <BaseButton text="Update" bgColor="#181B9A" />
    </div>
  </div>
</template>

<style scoped>
.project-assign {
  background-color: white;
  max-width: 400px;
  height: 210px;
  border-radius: 6px;
  padding: 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
}
.project-input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
select {
  border-radius: 6px;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
}
.modal-btns {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}
</style>

<script lang="ts" setup>
import { onMounted } from 'vue'
import BaseButton from './buttons/BaseButton.vue'

onMounted(() => {
  console.log('component is mounted')
  console.log('Fetching users')
})
</script>
