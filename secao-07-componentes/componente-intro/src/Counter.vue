<template>
  <div class="counter">
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <span>{{ counter }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
}
</script>

<style scoped>
  span {
    border-bottom: 1px solid coral;
    height: 30px;
    padding: 5px 25px;
  }

  button {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    color: white;
    background-color: coral;
    margin-right: 10px;
    outline: none;
  }
</style>