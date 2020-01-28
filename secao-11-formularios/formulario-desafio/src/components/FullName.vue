<template>
  <div>
    <Rotulo nome="Nome">
      <input
        type="text"
        :value="value.firstName"
        @input="changeName($event.target.value, value.lastName)"
      />
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input
        type="text"
        :value="value.lastName"
        @input="changeName(value.firstName, $event.target.value)"
      />
    </Rotulo>
  </div>
</template>

<script>
  import Rotulo from './Rotulo.vue'

  export default {
    props: {
      value: {
        type: Object,
        required: true
      }
    },
    components: { Rotulo },
    methods: {
      changeName(first, last) {
        this.$emit('input', { firstName: first, lastName: last })
      }
    }
  }
</script>

<style></style>
