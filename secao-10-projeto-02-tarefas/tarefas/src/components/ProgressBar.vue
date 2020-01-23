<template>
  <div class="progress-bar">
    <div class="bar" :style="{ width: progress + '%' }"></div>
    <div class="progress">{{ progress }}%</div>
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
}
</script>

<style scoped>
.progress-bar {
  position: relative;
  width: 100%;
  height: 15pt;
  border-radius: 5pt;
  border: 1px solid grey;
  margin-bottom: 30pt;
}

.bar {
  position: absolute;
  height: 100%;
  border-radius: 4pt;
  background-color: #49b057;
}

.progress {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
