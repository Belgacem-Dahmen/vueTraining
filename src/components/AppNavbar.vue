<template>
    <div class="navbar">
        
        <div class="navbar-container">
            <img  class="logo" src="@/assets/logos/logo-ipda.png" alt="">
            
            <div class="navbar-links_container">
                <BaseLink text="home" to="/" iconName="edit-icon.svg"/>
               <BaseLink  text="about" to="/about" iconName="about-icon.svg"/>
               <BaseLink  text="projects" to="/projects" iconName="project-icon.png" />
            </div>
            
               
           
            
        </div>
        <div class="navbar-toggle">
      
      
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