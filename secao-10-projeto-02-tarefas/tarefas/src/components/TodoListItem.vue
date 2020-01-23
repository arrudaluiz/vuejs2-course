<template>
  <div
    class="todo-list-item"
    :class="item.status[stat]"
    @click="changeStatus()"
  >
    <h2>{{ item.content }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      stat: 0
    }
  },
  methods: {
    changeStatus() {
      this.stat < 2 ? this.stat++ : (this.stat = 0)
    }
  }
}
</script>

<style>
.todo-list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border-radius: 5pt;
  margin: 5pt;
  cursor: default;
}

.todo {
  border-left: 5pt solid red;
  background-color: #f15246;
}

.doing {
  color: black;
  border-left: 5pt solid orange;
  background-color: yellow;
}

.done {
  border-left: 5pt solid green;
  background-color: #49b057;
  text-decoration: line-through;
}
</style>
