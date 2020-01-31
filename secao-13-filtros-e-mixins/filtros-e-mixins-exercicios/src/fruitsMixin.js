export default {
  data() {
    return {
      fruit: '',
      fruits: ['banana', 'maça', 'laranja']
    }
  },
  methods: {
    addFruit() {
      this.fruits.push(this.fruit)
      this.fruit = ''
    }
  }
}
