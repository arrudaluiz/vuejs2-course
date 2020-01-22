<template>
  <div id="app">
    <keep-alive>
      <component :is="component" />
    </keep-alive>
    <button
      @click="component == 'Sobre' ? component = 'Citacoes' : component = 'Sobre'"
    >{{ component == 'Sobre' ? 'Citacoes' : 'Sobre' }}</button>
  </div>
</template>

<script>
import Citacoes from "./components/Citacoes";
import Sobre from "./components/Sobre";

export default {
  components: { Citacoes, Sobre },
  data() {
    return {
      component: "Citacoes"
    };
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.6rem;
}

button {
  outline: none;
  padding: 5px 15px 10px;
  margin: 10px 5px;
  border-radius: 3px;
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>