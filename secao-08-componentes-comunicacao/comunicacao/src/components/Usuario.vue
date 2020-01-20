<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>Nome é <strong>{{ name }}</strong></p>
    <p>Idade é <strong>{{ age }}</strong></p>
    <button @click="changeName">Alterar Nome</button>
    <hr />
    <div class="componentes">
      <app-usuario-info
        :userName="name"
        :userAge="age"
        @changedName="name = $event"
        :restartNameCallback="restartName"
      />
      <app-usuario-editar
        :userName="name"
        :userAge="age"
        @changedAge="age = $event"
        :incrementAgeCallback="incrementAge"
      />
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  data() {
    return {
      name: "Pedro",
      age: 21
    };
  },
  methods: {
    changeName() {
      this.name = "Ana";
    },
    restartName() {
      this.name = "Pedro";
    },
    incrementAge() {
      this.age++
    }
  },
  components: { AppUsuarioInfo, AppUsuarioEditar }
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
