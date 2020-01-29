<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="text"></p>
    <p v-html="html"></p>
    <hr />
    <p v-highlight="'lightyellow'">Usando diretiva personalizada</p>
    <p v-highlight="color">Usando diretiva personalizada</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text:
          'Usando diretiva v-text. <strong>Tags HTML não são interpretadas</strong>',
        html:
          'Usando diretiva v-html <strong>(Cuidado com ataques XSS: tenha certeza a fonte da informação é segura.)</strong>',
        color: 'lightgreen'
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
