new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Alerta!')
        },
        getValue() {
            this.valor = event.target.value
        }
    }
})