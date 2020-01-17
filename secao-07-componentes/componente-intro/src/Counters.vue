<template>
  <div class="counters">
    <h1>Contadores</h1>
    <counter v-for="c in 5" :key="c" />
  </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
  /** Registro local */
  components: {
    'counter': Counter
  }
}
</script>

<style>
</style>