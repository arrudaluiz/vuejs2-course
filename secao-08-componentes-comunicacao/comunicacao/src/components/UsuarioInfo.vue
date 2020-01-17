<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário:
      <strong>{{ invertName() }}</strong>
    </p>
    <button @click="restartName">Reiniciar Nome</button>
    <button @click="restartNameCallback()">Reiniciar Nome (Callback)</button>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      //   required: true,
      //   default: function() {
      //     return Array(10).fill(0).join("-");
      //   },
      default: "Anônimo"
    },
    restartNameCallback: Function
  },
  methods: {
    invertName() {
      return this.userName
        .split("")
        .reverse()
        .join("")
    },
    restartName() {
      this.$emit("changedName", 'Pedro')
    }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
