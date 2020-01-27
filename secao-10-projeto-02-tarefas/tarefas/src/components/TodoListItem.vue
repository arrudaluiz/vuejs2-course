<template>
  <div
    class="todo-list-item"
    :class="status[item.status]"
    @click="changeStatus()"
  >
    <div class="item-head">
      <button @click="$emit('todoRemoved', item)">X</button>
    </div>
    <div class="item-body">
      <h2>{{ item.content }}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: { type: Object, required: true }
    },
    data() {
      return {
        status: ['done', 'doing', 'todo']
      }
    },
    methods: {
      changeStatus() {
        this.item.status > 0 ? this.item.status-- : (this.item.status = 2)
      }
    }
  }
</script>

<style scoped>
  .todo-list-item {
    position: relative;
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
    border-left: 5pt solid orangered;
    background-color: orange;
  }

  .done {
    border-left: 5pt solid green;
    background-color: #49b057;
  }

  .done .item-body {
    text-decoration: line-through;
  }

  .item-head {
    position: absolute;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    width: 100%;
  }

  .item-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .item-head button {
    color: white;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.2);
    height: 20px;
    width: 20px;
    border-radius: 10px;
    border: none;
    padding: 0;
  }

  .item-head * {
    margin: 5pt;
  }
</style>
