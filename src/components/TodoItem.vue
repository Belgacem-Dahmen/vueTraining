<template>
    <div class="todo-card">
        
      <div class="todo-header">
        <h3>{{ todo.todo }}</h3>
        <span class="status" :class="{ completed: todo.completed }">
          {{ todo.completed ? 'Completed' : 'Pending' }}
        </span>
    </div>
      <p class="todo-id">#{{ todo.id }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    todo: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .todo-card {
    background: #fff;
    width: 350px;
    min-height: 120px;
    border-radius: 8px;
    padding: 16px 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    margin-bottom: 12px;
    border: 1px solid gray;
  }
  
  .todo-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .todo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .todo-header h3 {
    font-size: 18px;
    margin: 0;
    color: #333;
  }
  
  .status {
    font-size: 14px;
    padding: 4px 10px;
    border-radius: 12px;
    background-color: #f2f2f2;
    color: #666;
  }
  
  .status.completed {
    background-color: #daf5dc;
    color: #2e7d32;
  }
  
  .todo-id {
    font-size: 13px;
    color: #999;
    margin-top: 8px;
  }
  </style>
  