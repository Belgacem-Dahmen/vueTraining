<template>
  <div class="navbar" :class="{ closed: !appStore.isOpen }">
    <div class="navbar-container" :class="{ closed: !appStore.isOpen }">
      <img v-if="appStore.isOpen" class="logo" src="@/assets/logos/logo-ipda.png" alt="" />
      <img v-else src="@/assets/logos/Sigle_blue.png" class="small-logo" alt="" />

      <div class="navbar-links_container" :class="{ closed: !appStore.isOpen }">
        <BaseLink :text="appStore.isOpen ? 'home' : ''" to="/" iconName="edit-icon.svg" />
        <BaseLink :text="appStore.isOpen ? 'about' : ''" to="/about" iconName="about-icon.svg" />
        <BaseLink
          :text="appStore.isOpen ? 'projects' : ''"
          to="/projects"
          iconName="project-icon.svg"
        />
      </div>
    </div>
    <div class="navbar-toggle"></div>
    <div class="navbar-footer">
      <button class="whatsapp-btn" :class="{ small: !appStore.isOpen }">
        <AppIcon iconName="whatsapp-icon.svg" />
        <p v-if="appStore.isOpen">Feeling Lost ? contact us !</p>
      </button>

      <BaseLink :text="appStore.isOpen ? 'Logout' : ''" to="/about" iconName="logout-icon.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseLink from './BaseLink.vue'
import { useAppStore } from '@/stores/appStore'
import AppIcon from './AppIcon.vue'
const appStore = useAppStore()
</script>

<style scoped>
.navbar {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1);
  transition: width 0.4s ease; /* Smooth width transition */
  background-color: white;
}

.closed {
  max-width: 50px;
  display: flex;
  gap: 20px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 5px;
}

.logo {
  max-width: 100%;
}

.small-logo {
  width: 100%;
  margin-top: 15px;
}
.closed-logo {
  max-width: 50px;
}
.navbar-links_container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.link {
  /* padding: 16px; */
  cursor: pointer;
}

.link:hover {
  background: #f2f4ff;
  color: #181b9a;
}

.whatsapp-btn {
  background-color: #0fa639;
  color: white;
  border-radius: 6px;
  display: flex;
  gap: 16px;
  padding: 12px;
  border: none;
  width: 80%;
  margin: 0 auto;
}

.small {
  width: 38px;
}

.navbar-footer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
