<template>
  <div id="app">
    <h1>Tarefas</h1>
    <ProgressBar :progress="progress" />
    <NewTask :value="'Nova tarefa'" @textSent="input = $event">+</NewTask>
    <TodoList :list="todoList" />
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import NewTask from '@/components/NewTask.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  data() {
    return {
      progress: 50,
      input: '',
      todoList: []
    }
  },
  watch: {
    input() {
      this.todoList.push({
        content: this.input,
        status: ['todo', 'doing', 'done']
      })
    }
  },
  components: { ProgressBar, NewTask, TodoList }
}
</script>

<style>
body {
  font-family: 'Lato', sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
  padding: 0 10%;
  margin: 0;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
