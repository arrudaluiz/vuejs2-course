<template>
  <div class="question">
    <h2>{{ question.text }}</h2>
    <ul class="answers">
      <li
        v-for="(answer, index) in question.answers"
        :key="answer.text"
        @click="sendAnswer(index)"
      >
        <div class="number">{{ index + 1 }}</div>
        <p class="text">{{ answer.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      question: {
        type: Object,
        required: true
      }
    },
    methods: {
      sendAnswer(i) {
        this.$emit('sentAnswer', this.question.answers[i].correct)
      }
    }
  }
</script>

<style>
  .question {
    height: 400px;
    padding: 0;
    margin: 0;
    color: #000;
    background-color: #fff;
    width: 70%;
    border-radius: 20px;
    font-size: 2.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .question h2 {
    margin: 0;
  }

  ul.answers {
    font-size: 2rem;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .answers li {
    background-color: #89c454;
    border-radius: 8px;
    width: 40%;
    margin: 10px;

    display: flex;
  }

  .answers .number {
    padding: 10px;
    background-color: #1e9c31;
    color: #fff;
    flex-basis: 30px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .answers .text {
    margin: 0;
    flex: 1;
    align-self: center;
  }
</style>
