<template>
  <main class="app-layout">
    <div class="layout-container">
      <!-- Left Sidebar -->
      <div class="sidebar">
        <!-- Sidebar content (you can add links, icons, etc.) -->
        <AppNavbar />
      </div>

      <!-- Content Area -->
      <div class="content" :class="appStore.isOpen ? '' : 'expanded'">

        <Page>
          <router-view />
        </Page>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue'
import Page from './components/Page.vue'
import { useAppStore } from './stores/appStore'

const appStore = useAppStore()
</script>


<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-container {
  display: flex;
  flex: 1;
  position: relative; /* Make the content area position relative to the parent */
}

.sidebar {
  position: fixed; /* Fix the sidebar on the left */
  top: 0;
  left: 0;
  max-width: 350px;
  background-color: #f4f4f4;
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.1);
  height: 100vh; /* Ensure the sidebar takes the full height of the viewport */
  overflow-y: auto; /* Allow sidebar content to scroll if necessary */
}

.content {
  margin-left: 350px;
  /* Offset the content to the right of the sidebar */
  flex: 1;
  padding: 20px;
  background-color: #fdfcfc;
  overflow-y: auto; /* Enable scrolling for the content */
  height: 100vh; /* Ensure content area takes the full height */
  transition: margin-left 0.2s ease;
}
.expanded {
  margin-left: 50px;
}
/* Optional: Style the Navbar */
.app-navbar {
  background-color: #fff;
  color: #fff;
  padding: 10px;
  text-align: center;
}
</style>
