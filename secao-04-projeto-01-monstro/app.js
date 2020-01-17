new Vue({
  el: '#monster-slayer',
  data: {
    ingame: false,
    status: 0,
    finalMessage: [
      {
        title: '',
        message: '',
        fontColor: ''
      },
      {
        title: 'Derrota!',
        message: 'Infelizmente, você sucumbe aos seus ferimentos.',
        fontColor: 'red'
      },
      {
        title: 'Vitória!',
        message: 'Você derrotou o monstro!',
        fontColor: 'yellowgreen'
      },
      {
        title: 'Vitória?',
        message: 'O monstro foi derrotado! Infelizmente, você sucumbe aos seus ferimentos.',
        fontColor: 'purple'
      },
      {
        title: 'Desistência',
        message: 'Você fugiu do monstro.',
        fontColor: 'grey'
      }
    ],
    baseDamage: 5,
    monster: {
      name: 'Monstro',
      hp: 100,
      action: { attack: 2 }
    },
    player: {
      name: 'Jogador',
      hp: 100,
      action: {
        attack: 1,
        magic: 2,
        heal: 3
      }
    },
    turns: []
  },
  computed: {
    updatePlayerHP() {
      if (this.player.hp == 0) {
        this.status += 1
        this.ingame = false
      }
    },
    updateMonsterHP() {
      if (this.monster.hp == 0) {
        this.status += 2
        this.ingame = false
      }
    },
    getStatus() {
      return this.status
    }
  },
  methods: {
    newGame() {
      this.player.hp = 100
      this.monster.hp = 100
      this.turns.length = 0
      this.status = 0
      this.ingame = true
    },
    attack(isMagical) {
      const monsterDamage = this.getValue(this.baseDamage, this.monster.action.attack)
      const playerDamage = this.getValue(this.baseDamage,
        isMagical ? this.player.action.magic : this.player.action.attack)

      this.player.hp = Math.max(this.player.hp - monsterDamage, 0)
      this.monster.hp = Math.max(this.monster.hp - playerDamage, 0)

      this.turns.unshift({
        monsterLog: `${this.monster.name} desferiu um golpe e causou ${monsterDamage} de dano.`,
        playerLog: `${this.player.name} ${isMagical ? 'lançou uma magia' : 'desferiu um golpe'} e causou ${playerDamage} de dano.`
      })
    },
    heal() {
      const monsterDamage = this.getValue(this.baseDamage, this.monster.action.attack)
      const playerHeal = this.getValue(this.baseDamage, this.player.action.heal)

      this.player.hp = Math.min(this.player.hp - (monsterDamage - playerHeal), 100)

      this.turns.unshift({
        monsterLog: `${this.monster.name} desferiu um golpe e causou ${monsterDamage} de dano.`,
        playerLog: `${this.player.name} se curou e recuperou ${playerHeal} de vida.`
      })
    },
    run() {
      this.status = 4
      this.ingame = false
    },
    getValue(baseValue, action) {
      return baseValue + Math.round(Math.random() * baseValue * action)
    }
  }
})