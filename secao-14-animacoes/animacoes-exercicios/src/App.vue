<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <b-button variant="primary" class="mb-4" @click="visible = !visible"
      >Alternar Mensagem</b-button
    >

    <!-- <transition name="fade" appear>
      <b-alert variant="info" show v-if="visible">{{ message }}</b-alert>
    </transition>

		<transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-show="visible">{{ message }}</b-alert>
    </transition> -->

    <!-- https://daneden.github.io/animate.css/ -->
    <!-- <transition
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutRight">
      <b-alert variant="info" show v-show="visible">{{ message }}</b-alert>
    </transition> -->

    <b-select v-model="animationType" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="animationType" mode="out-in">
      <b-alert variant="info" show v-if="visible" key="info">{{
        message
      }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ message }}</b-alert>
    </transition>

    <hr />
    <button @click="visible2 = !visible2">
      {{ visible2 ? 'Ocultar' : 'Exibir' }}
    </button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      appear
    >
      <div v-if="visible2" class="box"></div>
    </transition>

    <hr />
    <div class="mb-4">
      <b-button variant="primary" class="mr-2"
        @click="selectedComponent = 'InfoAlert'">Informação</b-button>
      <b-button variant="secondary"
        @click="selectedComponent = 'WarningAlert'">Advertência</b-button>
    </div>

    <transition name="fade" mode="out-in">
      <component :is="selectedComponent"></component>
    </transition>
  </div>
</template>

<script>
  import WarningAlert from './WarningAlert'
  import InfoAlert from './InfoAlert'

  export default {
    components: { WarningAlert, InfoAlert },
    data() {
      return {
        message: 'Mensagem de informação',
        visible: false,
        visible2: true,
        animationType: 'fade',
        baseWidth: 300,
        selectedComponent: 'InfoAlert'
      }
    },
    methods: {
      animate(el, done, show) {
        const interval = 20
        const roundTotal = 50
        const widthIncrement = 6

        let round = 1
        const timer = setInterval(() => {
          const newWidth = show
            ? round * widthIncrement
            : this.baseWidth - round * widthIncrement
          el.style.width = `${newWidth}px`
          round++
          if (round > roundTotal) {
            clearInterval(timer)
            done()
          }
        }, interval)
      },
      beforeEnter(el) {
        el.style.width = 0
      },
      enter(el, done) {
        this.animate(el, done, true)
      },
      // afterEnter(el) {
      //   console.log('afterEnter');
      // },
      // enterCancelled(el) {
      //   console.log('enterCancelled');
      // },
      beforeLeave(el) {
        el.style.width = `${this.baseWidth}px`
      },
      leave(el, done) {
        this.animate(el, done, false)
      }
      // afterLeave(el) {
      //   console.log('afterLeave');
      // },
      // leaveCancelled(el) {
      //   console.log('leaveCancelled');
      // }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 1.5rem;
  }

  .box {
    width: 300px;
    height: 100px;
    margin: 30px auto;
    background-color: lightgreen;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s;
  }
  /* 
  .fade-enter-to,
  .fade-leave {
    opacity: 1;
  }
  */

  @keyframes slide-in {
    from {
      transform: translateY(40px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(40px);
    }
  }

  .slide-enter-active {
    animation: slide-in 2s ease-out;
    transition: opacity 2s;
  }

  .slide-leave-active {
    animation: slide-out 2s ease-in;
    transition: opacity 2s;
  }

  .slide-enter,
  .slide-leave-to {
    opacity: 0;
  }
</style>
