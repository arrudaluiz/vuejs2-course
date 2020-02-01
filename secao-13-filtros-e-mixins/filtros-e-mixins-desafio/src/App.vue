<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <p>{{ text | spaceToComma }}</p>
    <p>{{ text | space-to-comma }}</p>
    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
    valor na string final-->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <p>{{ text | wordLength }}</p>
    <p>{{ text | word-length }}</p>

    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <p>{{ spaceToCommaComputed }}</p>
    <p>{{ wordLengthComputed }}</p>

    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
  import challengeMixin from "./challengeMixin";

  export default {
    mixins: [challengeMixin],
    data() {
      return {
        text: "Frase utilizada para o desafio de filtros e mixins"
      };
    },
    filters: {
      spaceToComma(value) {
        // return value.split(' ').join(',')
        return value.replace(/\s/g, ",");
      }
    },
    computed: {
      spaceToCommaComputed() {
        // return this.text.split(" ").join(",");
        return this.text.replace(/\s/g, ",");
      }
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 2.5rem;
  }
</style>
