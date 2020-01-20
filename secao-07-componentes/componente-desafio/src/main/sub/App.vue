<template>
  <v-app>
    <MenuBar
      :itemList="itensMenu"
      @changedTitle="titleContent.subtitle = $event"
    />

    <TitleBar :content="titleContent"/>

    <v-content>
      <Carousel :content="images"/>
    </v-content>

    <PageFooter :content="footerContent"/>
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
  data() {
    return {
      itensMenu: [
        { titulo: "Início", icon: "dashboard" },
        { titulo: "Sobre", icon: "question_answer" }
      ],
      titleContent: {
        title: 'Desafio',
        subtitle: 'Componente'
      },
      images: [
        { src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" },
        { src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg" },
        { src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg" },
        { src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg" }
      ],
      footerContent: `Curso Vue ${String.fromCodePoint(169)} ${new Date().getFullYear()}`
    };
  },
  components: { MenuBar, TitleBar, Carousel, PageFooter }
};
</script>
