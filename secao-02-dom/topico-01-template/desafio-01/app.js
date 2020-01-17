new Vue({
  el: '#desafio',
  data: {
    name: 'Luiz',
    age: 30,
    image: 'https://vuejs.org/images/logo.png'
  },
  methods: {
    multiplier() {
      return this.age * 3
    },
    random() {
      return Math.random()
    }
  }
})