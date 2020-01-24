<template>
  <div class="todo-list">
    <div class="item" v-for="item in list" :key="item.id">
      <TodoListItem :item="item" @todoRemoved="$emit('todoRemoved', $event)" />
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

<style scoped>
.todo-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>
