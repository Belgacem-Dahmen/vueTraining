<template>
  <nav class="pagination">
    <div class="pagination-text">
      <p>Showing {{ fromItem }} to {{ toItem }} of {{ props.total }} results</p>
    </div>

    <div class="pagination-actions">
      <!-- Prev Arrow -->
      <button :disabled="currentPage <= 1" @click="goToPage(currentPage - 1)">
        ←
      </button>

      <!-- First Page -->
      <button :class="{ active: currentPage === 1 }" @click="goToPage(1)">
        1
      </button>

      <!-- Dots before -->
      <span v-if="currentPage > 3">...</span>

      <!-- Middle Pages -->
      <button v-for="page in middlePages" :key="page" :class="{ active: currentPage === page }" @click="goToPage(page)">
        {{ page }}
      </button>

      <!-- Dots after -->
      <span v-if="currentPage < totalPages - 2">...</span>

      <!-- Last Page -->
      <button v-if="totalPages > 1" :class="{ active: currentPage === totalPages }" @click="goToPage(totalPages)">
        {{ totalPages }}
      </button>

      <!-- Next Arrow -->
      <button :disabled="currentPage >= totalPages" @click="goToPage(currentPage + 1)">
        →
      </button>
    </div>


    <div class="pagination-itemsPerPage">
      <p>Items per page</p>
      <select :value="props.limit" @change="changeLimit">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="100">100</option>
      </select>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  total: number
  limit: number
  skip: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:skip', newSkip: number): void
  (e: 'update:limit', newLimit: number): void
}>()

const currentPage = computed(() => Math.floor(props.skip / props.limit) + 1)
const totalPages = computed(() => Math.ceil(props.total / props.limit))

const fromItem = computed(() => (props.total === 0 ? 0 : props.skip + 1))
const toItem = computed(() => Math.min(props.skip + props.limit, props.total))
const middlePages = computed(() => {
  const pages: number[] = []

  for (let i = currentPage.value - 1; i <= currentPage.value + 1; i++) {
    if (i > 1 && i < totalPages.value) {
      pages.push(i)
    }
  }

  return pages
})
function goToPage(page: number) {
  const newSkip = (page - 1) * props.limit
  emit('update:skip', newSkip)
}

function changeLimit(event: Event) {
  const newLimit = parseInt((event.target as HTMLSelectElement).value)
  emit('update:limit', newLimit)
  emit('update:skip', 0) // Reset to page 1 when limit changes
}
</script>

<style scoped>
.pagination {
  display: flex;
  min-width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 3rem;
}

.pagination-text {
  color: #7F7F7F;
}

.pagination-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #010101;
  border: none;
  border-radius: 6px;
}

.pagination-actions button {
  border: none;
  padding: 10px 12px;

}

.pagination-itemsPerPage {
  display: flex;
  align-items: center;
  gap: 16px;
}

.pagination-itemsPerPage p {
  color: #7F7F7F;
}

.pagination-itemsPerPage select {
  border: 1px solid #7F7F7F;
  border-radius: 4px;
  padding: 6px 5px;
  display: flex;
  gap: 5px;
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

button.active {
  font-weight: bold;
  background: #F2F4FF;
}
</style>
