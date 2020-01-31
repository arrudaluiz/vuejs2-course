<template>
  <div id="app">
    <h1>Diretivas (Desafio)</h1>
    <hr />
    <!-- Exercício -->
    <!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
    <button v-dothis:click="alertAction">Me clique</button>
    <p v-dothis:mouseenter="mouseEnter" v-dothis:mouseleave="mouseLeave">
      Passe o mouse sobre mim.
    </p>
  </div>
</template>

<script>
  export default {
    directives: {
      dothis: {
        bind(el, binding) {
          const eventType = binding.arg
          const fn = binding.value

          el.addEventListener(
            eventType,
            () => {
              fn(el)
            },
            false
          )
        }
      }
    },
    methods: {
      alertAction() {
        alert('Ação executada!')
      },
      mouseEnter(element) {
        element.style.backgroundColor = 'lightpink'
      },
      mouseLeave(element) {
        element.style.backgroundColor = 'white'
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

  button {
    margin: 10px 0px;
    padding: 10px 20px;
    font-size: 1.4rem;
    border-radius: 5px;
    color: #fff;
    background-color: #2196f3;
  }
</style>
