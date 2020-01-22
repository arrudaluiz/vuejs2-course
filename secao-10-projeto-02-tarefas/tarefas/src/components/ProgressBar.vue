<template>
  <div class="progress-bar">
    <div class="progress" :style="{width: progress + '%'}"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.progress-bar {
  width: 80%;
  height: 15pt;
  border-radius: 5pt;
  border: 1px solid grey;
  margin-bottom: 30pt;
}

.progress {
  height: 100%;
  border-radius: 4pt;
  background-color: #49b057;
}
</style>