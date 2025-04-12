<template>
  <main>
    <BaseLoader v-if="isLoading" />
    <div v-else class="recipe-card">
      <img :src="recipe?.image" :alt="recipe?.name" class="recipe-image" />

      <div class="recipe-content">
        <h1 class="recipe-title">{{ recipe?.name }}</h1>

        <div class="recipe-meta">
          <span class="badge difficulty">{{ recipe?.difficulty }}</span>
          <span>{{ recipe?.cuisine }}</span>
          <span>🍽 {{ recipe?.mealType.join(', ') }}</span>
          <span>🔥 {{ recipe?.caloriesPerServing }} cal/serving</span>
          <span>⭐ {{ recipe?.rating }} ({{ recipe?.reviewCount }} reviews)</span>
        </div>

        <div class="recipe-time">
          ⏱ Prep: {{ recipe?.prepTimeMinutes }} mins |
          Cook: {{ recipe?.cookTimeMinutes }} mins |
          Servings: {{ recipe?.servings }}
        </div>

        <div class="tags">
          <span v-for="tag in recipe?.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>

        <h3>Ingredients</h3>
        <ul class="ingredients">
          <li v-for="(item, i) in recipe?.ingredients" :key="i">{{ item }}</li>
        </ul>

        <h3>Instructions</h3>
        <ol class="instructions">
          <li v-for="(step, i) in recipe?.instructions" :key="i">{{ step }}</li>
        </ol>
      </div>
    </div>

  </main>

</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRecipesStore } from '@/stores/RecipesStore'
import BaseLoader from '@/components/BaseLoader.vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
const isLoading = ref(true);
const route = useRoute()
const recipesStore = useRecipesStore()
const { recipe } = storeToRefs(recipesStore)

onMounted(async () => {
  const id = route.params.id as string
  console.log(id);
  await recipesStore.getRecipe(id)
  isLoading.value = false
})
</script>

<style scoped>
.main {

  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.recipe-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  margin: 30px auto;
  font-family: 'Segoe UI', sans-serif;
}

.recipe-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.recipe-content {
  padding: 20px;
}

.recipe-title {
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
}

.recipe-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
}

.recipe-time {
  font-size: 15px;
  margin-bottom: 15px;
  color: #555;
}

.badge.difficulty {
  background-color: #ffdd57;
  color: #000;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 13px;
  text-transform: uppercase;
}

.tags {
  margin-bottom: 15px;
}

.tag {
  display: inline-block;
  background-color: #e0e0e0;
  color: #444;
  font-size: 13px;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.ingredients,
.instructions {
  margin-left: 20px;
  margin-bottom: 20px;
  color: #444;
  font-size: 15px;
}
</style>
