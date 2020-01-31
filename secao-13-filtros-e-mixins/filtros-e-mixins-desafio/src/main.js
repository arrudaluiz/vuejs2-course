import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('wordLength', value => {
  const arr = value.split(' ')
  arr.forEach((element, i) => {
    arr[i] = element.concat(' (' + element.length + ')')
  })
  return arr.join(' ')

  // return value.split(' ').map(w => { `${w} (${w.length})`}).join(' ')
})

new Vue({
  render: h => h(App)
}).$mount('#app')
