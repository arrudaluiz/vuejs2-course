new Vue({
	el: '#desafio',
	data: {
		challenge1: '',
		direita: true,
		challenge3: 'circulo azul',
		challenge4: 'quadrado verde',
		challenge5: '',
		style5: {
			width: '200px',
			height: '200px',
			border: '1px solid black',
			borderRadius: '50%'
		},
		width: '0%'
	},
	computed: {
		barProgress() {
			return this.width
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.challenge1 = this.challenge1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			let value = 0
			const timer = setInterval(() => {
				value++
				this.width = `${value}%`
				if (value == 100) {
					clearInterval(timer)
				}
			}, 100);
		},
		moveToRight(event) {
			if (event.target.value == "true") {
				this.direita = true
			} else if (event.target.value == "false") {
				this.direita = false
			}
		}
	}
})