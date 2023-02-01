<template>
  <v-app dark class="background">
    <top-navbar />
    <v-main class="background">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
    <v-dialog v-model="isDisable" max-width="500" persistent>
      <v-card class="secondary">
        <v-card-title class="justify-center">Login</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="password"
            outlined
            hide-details
            type="password"
            label="Enter password"
          >
          </v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn class="primary" @click="login" text block tile>Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import TopNavbar from "../components/partials/Navbar.vue";
import Footer from "../components/partials/Footer.vue";
export default {
  components: { TopNavbar, Footer },
  data() {
    return {
      isDisable: true,
      password: "",
    };
  },
  methods: {
    login() {
      if (this.password == "Quantex") {
        this.isDisable = false;
      }
    },
  },
};
</script>
