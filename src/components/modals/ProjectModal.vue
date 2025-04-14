<script setup lang="ts">
import BaseButton from '../buttons/BaseButton.vue'
import CloseButton from '../buttons/CloseButton.vue'
import BaseInput from '../Inputs/BaseInput.vue'
import BaseTextArea from '../Inputs/BaseTextArea.vue'


// Define props with TypeScript
interface Props {
  title: string
}

// Declare the props and their types
const props = defineProps<Props>()
</script>

<template>
  <div class="project-modal">
    <div>
      <div class="project-modal_header">
        <h3>{{ title }}</h3>
        <CloseButton />
      </div>
      <div class="inputs-container">
        <BaseInput label="Title" />
        <BaseInput label="Status" placeholder="Select a status" />
        <BaseInput label="Duration" placeholder="Select a start and end date" />
        <BaseInput label="Assigned To" />
        <BaseTextArea class="textarea" label="Description" placeholder="Enter your message" />
        <BaseInput label="Adress" placeholder="Enter adress" />
        <BaseInput label="City" placeholder="Enter message" />
        <BaseInput label="State" placeholder="Enter state" />
        <div>
          <BaseInput label="Country" />
          <BaseInput label="Zip code" />
        </div>
        <BaseInput label="Phone number" placeholder="Enter a phone number" />
        <BaseInput label="Email Adress" placeholder="example@gmail.com" />
        <BaseInput label="Website" placeholder="Enter website URL" />
        <BaseInput label="Stage" placeholder="Select" />
      </div>
    </div>

    <div class="modal-btns">
      <BaseButton text="Cancel" bg-color="#ffff" textColor="dark" />
      <BaseButton text="Create" bgColor="#181B9A" />
    </div>
  </div>
</template>

<style scoped>
.project-modal {
  max-width: 750px;
  min-height: 100vh;
  background: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
  border-radius: 6px;
 
}

.project-modal_header {
  display: flex;
  justify-content: space-between;
}

.inputs-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
}
.textarea {
  display: grid;
  grid-column: span 2;
}

.modal-btns {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
}

@media screen and (max-width: 950px) {
  .inputs-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
