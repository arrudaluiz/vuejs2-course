<template>
  <v-app>
    <MenuBar />

    <TitleBar />

    <v-content>
      <Carousel />
    </v-content>

    <PageFooter />
  </v-app>
</template>

<script>
/** Caminhos relativos */
import MenuBar from "../../components/MenuBar.vue";
import TitleBar from "../../components/TitleBar.vue";
/** Caminhos absolutos */
import Carousel from "@/widgets/Carousel.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  components: { MenuBar, TitleBar, Carousel, PageFooter }
};
</script>
