import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/types/Todo'

export const useTodosStore = defineStore('todosStore', () => {
  const todos = ref<Todo[]>([])
  const total = ref(0)
  const skip = ref(0)
  const limit = ref(10)

  const getTodos = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/todos?limit=${limit.value}&skip=${skip.value}`)
      const data = await res.json()
      todos.value = data.todos // update state
      total.value = data.total
    } catch (error) {
      console.error('Failed to fetch todos:', error)
    }
  }

  const getTodo = async (id: number): Promise<Todo> => {
    try {
      const res = await fetch(`https://dummyjson.com/todos/${id}`)
      const data = await res.json()
      console.log(data)

      return data
    } catch (error) {
      console.log(error)
    }
  }

  const addTodo = async (payload: Todo) => {
    try {
      fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: payload.todo,
          completed: payload.completed,
          userId: payload.id,
        }),
      })
        .then((res) => res.json())
        .then(console.log)
    } catch (error) {}
  }

  return { todos, total, skip, limit, getTodos, getTodo, addTodo }
})
