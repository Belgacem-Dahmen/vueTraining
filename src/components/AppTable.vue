<template>
    <table>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key" class="table-header">{{ col.label }}</th>
          <th v-if="$slots.actions" class="table-header">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="col in columns" :key="col.key" class="">
            <slot :name="col.key" :row="row">
              {{ row[col.key] }}
            </slot>
          </td>
          <td v-if="$slots.actions">

            <slot name="actions" :row="row" />
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  
  <script setup lang="ts">
  defineProps<{
    rows: any[];
    columns: Array<{
      key: string;
      label: string;
    }>;
  }>();
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  thead {
    color: gray;
    border-bottm:1px solid gray;
  }

  .table-header{
    background-color : #F7F8FF
  }
  th, td {
    padding: 12px 16px;
    /* border: 1px solid #ccc; */
    text-align: left;
  }
  </style>
  