<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Nome do Usuário: <strong>{{ userName }}</strong></p>
    <p>Idade do Usuário: <strong>{{ userAge }}</strong></p>
    <button @click="incrementAge">Aumentar Idade</button>
    <button @click="incrementAgeCallback">Aumentar Idade (Callback)</button>
    <button @click="incrementAgeEventBus">Aumentar Idade (Event Bus)</button>
  </div>
</template>

<script>
import bus from "@/bus"

export default {
  props: {
    userName: String,
    userAge: Number,
    incrementAgeCallback: Function
  },
  methods: {
    incrementAgeEventBus() {
      bus.changeAge(this.userAge += 1)
    },
    incrementAge() {
      this.$emit('changedAge', this.userAge += 1)
    }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
