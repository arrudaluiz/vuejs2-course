<template>
  <div class="question">
    <span>{{ question.text }}</span>
    <ul class="answers">
      <li
        v-for="(answer, index) in question.answers"
        :key="answer.text"
        @click="$emit('sentAnswer', answer.correct)"
      >
        <span class="number">{{ index + 1 }}</span>
        <span class="text">{{ answer.text }}</span>
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
    }
  }
</script>

<style>
  .question {
    height: 400px;
    color: #000;
    background-color: #fff;
    width: 70%;
    border-radius: 20px;
    font-size: 2.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    flex: 1;
    align-self: center;
  }
</style>
