<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <p>{{ loggedUser }}</p>
    <p>{{ studentCpf | cpf | reverse }}</p>
    <input type="text" :value="studentCpf | cpf" />
    <hr />
    <Fruits />
    <hr />
    <div>
      <ul>
        <li v-for="(fruit, i) in fruits" :key="i">{{ fruit }}</li>
      </ul>
      <input type="text" v-model="fruit" @keydown.enter="addFruit" />
    </div>
  </div>
</template>

<script>
  import fruitsMixin from './fruitsMixin'
  import userMixin from './userMixin'
  import Fruits from './Fruits.vue'

  export default {
    components: { Fruits },
    mixins: [fruitsMixin, userMixin],
    filters: {
      cpf(value) {
        const arr = `${value}`.split('')
        arr.splice(3, 0, '.')
        arr.splice(7, 0, '.')
        arr.splice(11, 0, '-')
        return arr.join('')
      }
    },
    data() {
      return {
        studentCpf: '60070080090',
        fruits: ['abacate'] // Prioridade do component sobre o mixin
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 2.5rem;
  }

  input {
    font-size: 2.5rem;
  }
</style>
