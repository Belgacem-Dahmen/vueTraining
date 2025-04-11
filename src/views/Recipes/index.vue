<template>
    <main>
      <h1>Recettes </h1>
      <BaseButton text="Ajouter recette" @click="openModal" />
        
      <RightSideModal v-model="showModal">
        <p>This content comes from the parent.</p>
      </RightSideModal>

      <div>
        <div v-for="recipe in recipesStore.recipes" :key="recipe.id"> 
            <RouterLink :to="`/recipe/${recipe.id}`">
  <h2>{{ recipe.name }}</h2>
</RouterLink>
        </div>
      </div>
    </main>
    
    </template>
    <script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import RightSideModal from '@/components/modals/SlideModal.vue'
  
    import BaseButton from '@/components/buttons/BaseButton.vue'
import { useRecipesStore } from '@/stores/RecipesStore'
    const recipesStore = useRecipesStore() 
    
    const showModal = ref(false)
    const openModal = () => (showModal.value = true)

    onMounted ( async () => {
        recipesStore.getRecipes()
    })
    </script>
  
    <style scoped>
    .main {
    
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  </style>