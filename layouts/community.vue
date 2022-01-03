<template>
  <v-app dark>
    <navbar-community />
    <v-main class="background">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/partials/Footer.vue";
import NavbarCommunity from '../components/partials/NavbarCommunity.vue';
export default {
  components: { Footer, NavbarCommunity },
  data() {
    return {};
  },
};
</script>