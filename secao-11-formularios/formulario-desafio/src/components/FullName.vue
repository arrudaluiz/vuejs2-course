<template>
  <div>
    <Rotulo nome="Nome">
      <!--
        Internamente, v-model usa diferentes propriedades
        e emite diferentes eventos para diferentes elementos input:
        Elementos text e textarea usam a propriedade value e emite o evento input.
      -->
      <input type="text" :value="value.firstName" @input="changeName" />
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <!--
        Também é possível utilizar v-model dentro de um componente personalizado
        emitindo eventos para o componente pai.
      -->
      <input type="text" v-model.lazy.trim="value.lastName" />
    </Rotulo>
  </div>
</template>

<script>
  import Rotulo from './Rotulo.vue'

  export default {
    props: {
      // Prop interna do v-model
      value: {
        type: Object,
        required: true
      }
    },
    components: { Rotulo },
    methods: {
      changeName(event) {
        this.$emit('input', {
          firstName: event.target.value,
          lastName: this.value.lastName
        })
      }
    }
  }
</script>

<style></style>
