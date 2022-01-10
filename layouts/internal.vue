<template>
  <v-app dark class="background">
    <v-main class="background">
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/partials/Footer.vue";
export default {
  components: { Footer },
  data() {
    return {};
  },
};
</script>