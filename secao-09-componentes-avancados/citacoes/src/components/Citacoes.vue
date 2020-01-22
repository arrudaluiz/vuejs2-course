<template>
  <div class="citacoes">
    <span>
      <button @click="numero--">&lt;</button>
      <button @click="numero++">&gt;</button>
    </span>
    <Citacao>
      <!-- Slot "fonte" -->
      <h6 slot="fonte">Fonte:</h6>
      <h5 slot="fonte">{{ citacoes[indice].fonte }}</h5>
      <!-- Slot "autor" -->
      <h6 slot="autor">Autor:</h6>
      <h1 slot="autor">{{ citacoes[indice].autor }}</h1>
      <!-- Slot padrão -->
      <h6>Texto:</h6>
      <p>{{ citacoes[indice].texto }}</p>
    </Citacao>
  </div>
</template>

<script>
import Citacao from "./Citacao.vue";

export default {
  components: { Citacao },
  data() {
    return {
      numero: 0,
      citacoes: [
        {
          fonte: "Jornal do Empreendedor",
          texto:
            "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          autor: "Margaret Mead"
        },
        {
          fonte: "Frases de Mãe",
          texto: "Isso não é um quarto, é um chiqueiro.",
          autor: "Roberta"
        },
        {
          fonte: "Frases de Pai",
          texto: "Vou contar até 3! 1, 2, 2...",
          autor: "Gustavo"
        }
      ]
    };
  },
  computed: {
    indice() {
      return Math.abs(this.numero % 3);
    }
  },
  created() {
    console.log('created')
  },
  destroyed() {
    console.log('destroyed')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  }
};
</script>

<style scoped>
.citacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>