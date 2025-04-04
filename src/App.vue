<template>
  <main class="app-layout">
    
    <div class="layout-container">
      <!-- Left Sidebar -->
      <div class="sidebar">
        <!-- Sidebar content (you can add links, icons, etc.) -->
        <AppNavbar :isClosed="isNavbarVisible"/>
      </div>

      <!-- Content Area -->
      <div class="content">
        <!-- Use Page component to wrap the router view -->
        <Page :toggleNavbar="toggleNavbar" >
          <router-view /> 
        </Page>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppNavbar from './components/AppNavbar.vue';
import Page from './components/Page.vue';

export default defineComponent({
  components: {
    AppNavbar,
    Page,
  },
});

const isNavbarVisible = ref(true);

const toggleNavbar = () => {
  isNavbarVisible.value = !isNavbarVisible.value;
};


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
  width: 350px;
  min-width: 350px;
  background-color: #f4f4f4;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  height: 100vh; /* Ensure the sidebar takes the full height of the viewport */
  overflow-y: auto; /* Allow sidebar content to scroll if necessary */
}

.content {
  margin-left: 350px; /* Offset the content to the right of the sidebar */
  flex: 1;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto; /* Enable scrolling for the content */
  height: 100vh; /* Ensure content area takes the full height */
}

/* Optional: Style the Navbar */
.app-navbar {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}
</style>
