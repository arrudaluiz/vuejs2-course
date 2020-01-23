<template>
  <div class="todo-list">
    <div class="item" v-for="(item, i) in list" :key="i">
      <TodoListItem :item="item" />
    </div>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue'

export default {
  props: {
    list: Array
  },
  components: { TodoListItem }
}
</script>

<style>
.todo-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>
