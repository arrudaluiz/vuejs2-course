<template>
  <div id="app">
    <button @click="title += '#'">Alterar</button>
    {{ title }}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'Teste Data usando Vue JS'
    }
  }
}
</script>

<style>
  #app {
    color: darkblue;
    font-weight: bold;
  }
</style>