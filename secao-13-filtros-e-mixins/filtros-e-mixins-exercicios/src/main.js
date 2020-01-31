import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('reverse', function(value) {
  return value
    .split('')
    .reverse()
    .join('')
})

Vue.mixin({
  created() {
    console.log('Created: main.js - Global mixin')
  }
})

new Vue({
  render: h => h(App),
  created() {
    console.log('Created: main.js - Vue instance')
  }
}).$mount('#app')
