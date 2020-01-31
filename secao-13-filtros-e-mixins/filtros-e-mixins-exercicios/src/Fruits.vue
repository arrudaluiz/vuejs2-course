<template>
  <div>
    <ul>
      <li v-for="(fruit, i) in fruits" :key="i">{{ fruit }}</li>
    </ul>
    <input type="text" v-model="fruit" @keydown.enter="addFruit" />
  </div>
</template>

<script>
  import fruitsMixin from './fruitsMixin'

  export default {
    mixins: [fruitsMixin],
    created() {
      console.log('Created: Fruits.vue')
    }
  }
</script>

<style></style>
