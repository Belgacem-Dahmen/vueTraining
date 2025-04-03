<script setup lang="ts">
import Avatar from './Avatar.vue'
</script>

<template>
  <div class="project-card">
    <div class="card-header">
      <div class="project-icon-container">
        <img class="icon" src="../assets/project-icon.png" alt="" />
      </div>
      <p class="project-status">Ongoing</p>
    </div>
    <div>
      <p>ID : Karma-project</p>
      <h3 class="card-title">Project title name here</h3>
      <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
    <div class="project-tag">project stage</div>
    <div class="card-dates">
      <div>
        <p>Start date</p>
        <p class="date">Mar 14 2025</p>
      </div>
      <div>
        <p>End date</p>
        <p class="date">jun 14 2025</p>
      </div>
    </div>
    <div class="card-profiles">
      <Avatar />
      <Avatar />
      <Avatar />
      <button class="add-assignee">+</button>
    </div>
    <button class="edit-btn">
      <img class="edit-icon" src="../assets/edit-icon.png" alt="" />
    </button>
  </div>
</template>

<style scoped>
.project-card {
  background-color: white;
  width: 280px;
  height: 300px;
  padding: 10px;
  border: 1px;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project-icon-container {
  background: #f2f4ff;
  padding: 8px;
  border-radius: 6px;
}
.icon {
  width: 38px;
}
.project-status {
  background: #c1c9bc;
  padding: 2px 8px;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  color: #0fa639;
}
.card-title {
  font-size: 20px;
}
p {
  color: #71839b;
  font-weight: 400;
  font-size: 12px;
}
.project-tag {
  background-color: #ffedd5;
  max-width: fit-content;
  padding: 2px 8px;
  border-radius: 6px;
  color: black;
}
.card-dates {
  display: flex;
  gap: 16px;
}
.date {
  color: black;
}

.card-profiles {
  display: flex;
  padding: 3px 4px;
  gap: 8px;
}

.add-assignee {
  border-radius: 100px;
  width: 32px;
  border: 0.1px solid gray;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.edit-btn {
  position: absolute;
  width: 38px;
  height: 38px;
  border-radius: 100%;
  border: none;
  display: none;
  align-items: center;
  justify-content: center;
  background: #5568fd;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
}
.project-card:hover .edit-btn {
  display: flex; /* Change this to flex to show the button */
}
.edit-icon {
  width: 16px;
}
</style>
