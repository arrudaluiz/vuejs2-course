<template>
  <div class="new-task">
    <input
      type="text"
      :placeholder="value"
      @keydown.enter="submitText"
      v-model="text"
    />
    <button @click="submitText">
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        required: false
      }
    },
    data() {
      return {
        text: ''
      }
    },
    methods: {
      submitText() {
        if (this.text.trim() != '') {
          this.$emit('textSent', this.text)
        }
        this.text = ''
      }
    }
  }
</script>

<style scoped>
  .new-task {
    display: flex;
    justify-content: center;
    width: 30%;
    height: 30pt;
    margin-bottom: 30pt;
  }

  input {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 8px;
    border-radius: 5pt 0 0 5pt;
    border: 1px solid grey;
    border-right: none;
  }

  button {
    color: white;
    font-weight: 700;
    background-color: #2594f0;
    height: 100%;
    border-radius: 0 5pt 5pt 0;
    border: 1px solid grey;
    border-left: none;
  }
</style>
