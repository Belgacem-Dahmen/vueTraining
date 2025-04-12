<template>
  <div class="input-container">
    <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
      <path fill="currentColor"
        d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.73.73l.27.28v.79l5 4.99L20.49 19zm-6 0A5 5 0 1 1 14 9a5 5 0 0 1-4.5 5z" />
    </svg>
    <input placeholder="Search" type="text" />

  </div>
</template>


<style scoped>
.input-container {
  border: 1px solid #ccc;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  min-width: 350px;

}

input {
  outline: none;
  border: none;
}

input:focus {
  border-color: blue;
  outline: none;
  /* Remove the default outline */
}
</style>
