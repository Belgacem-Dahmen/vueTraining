<script setup lang="ts">
import ProjectAssign from '@/components/ProjectAssign.vue'
import ProjectModal from '@/components/modals/ProjectModal.vue'
import NoteModal from '@/components/modals/NoteModal.vue'
</script>

<template>
    <div class="main">
        <ProjectAssign />
        <ProjectModal title="Create Project" />
        <NoteModal />
    </div>
    

</template>

<style scoped>
.main{
    background: rgb(163, 161, 182);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
</style>
