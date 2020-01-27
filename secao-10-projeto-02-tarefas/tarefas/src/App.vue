<template>
  <div id="app">
    <h1>Tarefas</h1>
    <ProgressBar :progress="progressDone" :subProgress="progressDoing" />
    <NewTask :value="'Nova tarefa'" @textSent="input = $event">+</NewTask>
    <TodoList :list="todoList" @todoRemoved="remove" />
    <h2 v-show="todoList.length == 0">Nenhuma tarefa registrada</h2>
  </div>
</template>

<script>
  import ProgressBar from '@/components/ProgressBar.vue'
  import NewTask from '@/components/NewTask.vue'
  import TodoList from '@/components/TodoList.vue'

  export default {
    components: { ProgressBar, NewTask, TodoList },
    data() {
      return {
        input: '',
        todoList: []
      }
    },
    computed: {
      progressDone() {
        const total = this.todoList.length
        const done = this.todoList.filter(todo => todo.status == 0).length
        return Math.round((100 * done) / total) || 0
      },
      progressDoing() {
        const total = this.todoList.length
        const doing = this.todoList.filter(todo => todo.status == 1).length
        return Math.round((100 * doing) / total) || 0
      }
    },
    watch: {
      input() {
        const reallyNew =
          this.todoList.findIndex(todo => todo.content == this.input) == -1
        reallyNew &&
          this.todoList.push({
            id: Date.now(),
            content: this.input,
            status: 2
          })
      },
      todoList: {
        deep: true,
        handler() {
          localStorage.setItem('todos', JSON.stringify(this.todoList))
        }
      }
    },
    methods: {
      remove(todo) {
        const i = this.todoList.indexOf(todo)
        this.todoList.splice(i, 1)
      }
    },
    created() {
      const json = localStorage.getItem('todos')
      this.todoList = JSON.parse(json) || []
    }
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
