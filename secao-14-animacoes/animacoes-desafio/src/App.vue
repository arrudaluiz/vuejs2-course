<template>
  <div id="app">
    <h1>Super Quiz</h1>
    <div class="container">
      <transition name="flip" appear>
        <Question
          v-if="answering"
          :question="questions[index]"
          @sentAnswer="finishQuestion"
        />
        <Result v-else :correct="correct" :nextQuestion="nextQuestion" />
      </transition>
    </div>
  </div>
</template>

<script>
  import questions from '@/util/questions'
  import Question from '@/components/Question.vue'
  import Result from '@/components/Result.vue'

  export default {
    components: { Question, Result },
    data() {
      return {
        questions,
        answering: true,
        correct: false,
        index: 0
      }
    },
    methods: {
      finishQuestion(e) {
        this.correct = e
        this.answering = false
      },
      nextQuestion() {
        this.index++
        this.answering = true
        this.correct = false
      }
    },
    watch: {
      index(value) {
        if (value == this.questions.length) this.index = 0
      }
    }
  }
</script>

<style>
  body {
    background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
    font-family: 'Oswald', sans-serif;
    color: #fff;
    height: 100vh;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #app h1 {
    font-weight: 200;
    font-size: 4rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }

  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  .flip-enter-active {
    animation: flip-in 0.3s ease;
  }

  .flip-leave-active {
    position: absolute;
    animation: flip-out 0.3s ease;
  }
</style>
