<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="text"></p>
    <p v-html="html"></p>
    <hr />
    <p v-highlight:background.delay="'lightyellow'">
      Usando diretiva personalizada
    </p>
    <p v-highlight.delay="color">Usando diretiva personalizada</p>
    <hr />
    <p v-local-highlight:background.delay="'lightyellow'">
      Usando diretiva personalizada local
    </p>
    <p v-local-highlight.delay="color">Usando diretiva personalizada local</p>
  </div>
</template>

<script>
  export default {
    directives: {
      'local-highlight': {
        bind(el, binding) {
          // el.style.backgroundColor = 'lightgreen'

          let delay = 0
          if (binding.modifiers['delay']) delay = 2000

          setTimeout(() => {
            if (binding.arg === 'background') {
              el.style.backgroundColor = binding.value
            } else {
              el.style.color = binding.value
            }
          }, delay)
        }
      }
    },
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
