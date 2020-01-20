<template>
  <v-footer class="pa-3" app>
    <v-spacer></v-spacer>
    <div>{{ content }}</div>
  </v-footer>
</template>

<script>
export default {
  props: {
    content: String
  }
};
</script>

<style>
</style>