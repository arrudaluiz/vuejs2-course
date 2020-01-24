<template>
  <div id="app">
    <h1>Tarefas</h1>
    <ProgressBar :progress="progressDone" :subProgress="progressDoing" />
    <NewTask :value="'Nova tarefa'" @textSent="input = $event">+</NewTask>
    <TodoList :list="todoList" @todoRemoved="remove($event)" />
    <h2 v-show="todoList.length == 0">Nenhuma tarefa registrada</h2>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import NewTask from '@/components/NewTask.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  data() {
    return {
      input: '',
      todoList: []
    }
  },
  computed: {
    progressDone() {
      return this.todoList.length != 0
        ? (100 * this.todoList.filter(todo => todo.status == 0).length) /
            this.todoList.length
        : 0
    },
    progressDoing() {
      return this.todoList.length != 0
        ? (100 * this.todoList.filter(todo => todo.status == 1).length) /
            this.todoList.length
        : 0
    }
  },
  watch: {
    input() {
      const exists = this.todoList.findIndex(todo => todo.content == this.input)
      if (exists == -1) {
        this.todoList.push({
          id: Date.now(),
          content: this.input,
          status: 2
        })
      }
    }
  },
  methods: {
    remove(todo) {
      this.todoList.splice(this.todoList.indexOf(todo), 1)
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

#app h2 {
  font-weight: 300;
}
</style>
