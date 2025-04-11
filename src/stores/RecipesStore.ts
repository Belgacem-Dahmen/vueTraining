import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Recipe } from '@/types/Recipe'


export const useRecipesStore = defineStore('recipesStore', () => {
    
  const recipes = ref<Recipe[]>([])
  const recipe = ref<Recipe>()
    const getRecipes = async () => {
        try {
            const res = await fetch('https://dummyjson.com/recipes')
            const data = await res.json()
            recipes.value = data.recipes    
        } catch (error) {
            console.log(error);
            
        }
    }



    const getRecipe = async (id : any ) => {
        try {
            const res = await fetch(`https://dummyjson.com/recipes/${id}`)
            const data = await res.json()
            recipe.value = data
            
        } catch (error) {
            console.log(error);
            
        }
    }  
  return { recipes,recipe,  getRecipes, getRecipe}
})
