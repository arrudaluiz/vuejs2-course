<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>{{ content.title }}</span>
      <span class="font-weight-light">{{ content.subtitle }}</span>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    content: Object
  }
};
</script>

<style>
</style>