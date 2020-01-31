<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <p>{{ studentCpf | cpf | reverse }}</p>
    <input type="text" :value="studentCpf | cpf" />
  </div>
</template>

<script>
  export default {
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
        studentCpf: '60070080090'
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
