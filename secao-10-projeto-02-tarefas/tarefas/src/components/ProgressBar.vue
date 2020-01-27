<template>
  <div class="progress-bar">
    <div
      v-show="progress > 0"
      class="bar progress curved-border-left"
      :class="{ 'curved-border-right': subProgress == 0 }"
      :style="{ width: progress + '%' }"
    >
      {{ progress }}%
    </div>
    <div
      v-show="subProgress > 0"
      class="bar sub-progress curved-border-right"
      :class="{ 'curved-border-left': progress == 0 }"
      :style="{ width: subProgress + '%' }"
    >
      {{ subProgress }}%
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      progress: {
        type: Number,
        default: 0
      },
      subProgress: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
  .progress-bar {
    display: flex;
    width: 100%;
    height: 15pt;
    border-radius: 5pt;
    border: 1px solid grey;
    margin-bottom: 30pt;
  }

  .bar {
    display: flex;
    justify-content: flex-end;
    padding-right: 5pt;
    height: 100%;
  }

  .progress {
    background-color: #49b057;
  }

  .sub-progress {
    background-color: #ffa500;
  }

  .curved-border-left {
    border-top-left-radius: 4pt;
    border-bottom-left-radius: 4pt;
  }

  .curved-border-right {
    border-top-right-radius: 4pt;
    border-bottom-right-radius: 4pt;
  }
</style>
