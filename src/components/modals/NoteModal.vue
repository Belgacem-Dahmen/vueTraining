<template>
  <div class="note-modal">
    <div class="note-modal_top">
      <div class="note-modal_header">
        <h3>Create note</h3>
        <CloseButton />
      </div>
      <div class="tabs-container">
        <div class="tab">
          <p>General infos</p>
        </div>
      </div>
      <div class="inputs-container">
        <BaseInput label="Title" type="text" />
        <BaseInput label="Revenue to date" type="text" />
        <BaseInput label="Margin to date" type="text" />
        <BaseInput label="Google maps link" type="text" />
      </div>
      <BaseTextArea label="Description" />
    </div>
    <div class="modal-btns">
      <BaseButton text="Cancel" bg-color="#ffff" textColor="dark" />
      <BaseButton text="Create" bgColor="#181B9A" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '../buttons/BaseButton.vue'
import CloseButton from '../buttons/CloseButton.vue'
import BaseInput from '../Inputs/BaseInput.vue'
import BaseTextArea from '../Inputs/BaseTextArea.vue'
</script>

<style scoped>
.note-modal {
  max-width: 750px;
  background: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
  border-radius: 6px;
  min-height: 100vh;
}
.note-modal_top {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.note-modal_header {
  display: flex;
  justify-content: space-between;
}

.tabs-container {
  border-radius: 9px;
  background-color: #f2f4ff;
  padding: 5px;
}
.tab {
  background: white;
  max-width: fit-content;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
}
.inputs-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.modal-btns {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}
</style>
