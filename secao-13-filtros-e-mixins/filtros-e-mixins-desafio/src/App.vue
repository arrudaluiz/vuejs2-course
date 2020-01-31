<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <p>{{ text1 | spaceToComma }}</p>
    <p>{{ text1 | space-to-comma }}</p>
    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <p>{{ text2 }} => {{ text2 | wordLength }}</p>

    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <p>{{ spaceToCommaComputed }}</p>
    <p>{{ text2 }} => {{ wordLengthComputed }}</p>
    <input type="text" v-model="text1" />
    <input type="text" v-model="text2" />

    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
  export default {
    filters: {
      spaceToComma(value) {
        // return value.split(' ').join(',')
        return value.replace(/\s/g, ',')
      }
    },
    data() {
      return {
        text1: 'Testando filtro local que troca espaços por vírgula',
        text2: 'Pedro é legal'
      }
    },
    computed: {
      spaceToCommaComputed() {
        return this.text1.split(' ').join(',')
      },
      wordLengthComputed() {
        const arr = this.text2.split(' ')
        arr.forEach((element, i) => {
          arr[i] = element.concat(' (' + element.length + ')')
        })
        return arr.join(' ')
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
</style>
