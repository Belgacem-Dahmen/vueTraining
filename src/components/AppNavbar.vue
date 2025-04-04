<template>
    <div class="navbar" :class="{ 'navbar-closed': isClosed, 'navbar-open': !isClosed }">
        
        <div class="navbar-container">
            <img v-if="isClosed" class="closed-logo" src="@/assets/logos/Sigle_blue.png" alt="">
            <img v-else class="logo" src="@/assets/logos/logo-ipda.png" alt="">
            
            <div v-if="isClosed" class="navbar-links_container">
                <BaseLink  to="/"/>
                <BaseLink  to="/about"/>
            </div>
            <div v-else class="navbar-links_container">
               <BaseLink  text="home" to="/"/>
               <BaseLink  text="about" to="/about"/>
            </div>
            
        </div>
        <div class="navbar-toggle">
      
      <ul v-if="!isClosed">
        <li>Logout</li>
      </ul>
    </div>
        <div>
            <button>Feeling Lost ? contact us !</button>
            <ul>
            <li>Logout</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseLink from './BaseLink.vue';
import { defineProps } from 'vue';

// Define the props with TypeScript types
const props = defineProps({
  // Determines if the sidebar is closed or open
  isClosed: {
    type: Boolean,
    required: true,
  }})
 
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
    
}
.navbar-closed {
  max-width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.logo {
    max-width: 100%;
}
.closed-logo{
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
</style>