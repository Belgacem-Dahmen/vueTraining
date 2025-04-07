<script setup lang="ts">

import ProjectCard from '@/components/ProjectCard.vue'
import ProjectAssign from '@/components/ProjectAssign.vue'
import ProjectModal from '@/components/modals/ProjectModal.vue'
</script>

<template>
    <div class="main">
        <ProjectCard />
    <ProjectAssign />
    <ProjectModal title="Create Project" />
    <ProjectModal title="Edit Project" />
    </div>
    
    
</template>
<style>
.main{
    background: rgb(163, 161, 182);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
</style>
