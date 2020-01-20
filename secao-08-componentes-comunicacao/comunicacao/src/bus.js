import Vue from "vue"
export default new Vue({
  methods: {
    changeAge(age) {
      this.$emit('changedAge', age)
    },
    onAgeChange(callback) {
      this.$on('changedAge', callback)
    }
  }
})