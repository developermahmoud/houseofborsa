<template>
  <div class="mb-2 secondary rounded pt-3">
    <v-row no-gutters>
      <v-col
        class="text-center mb-3"
        cols="3"
        v-for="(service, i) in services"
        :key="i"
      >
        <nuxt-link :to="service.to" class="text-decoration-none">
          <v-icon size="20" color="primary" v-text="service.icon"></v-icon>
          <br />
          <span style="font-size: 11px" class="white--text">{{ service.text }}</span>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          icon: "fa-user-circle",
          text: "Trading\nAccounts",
          to: "/tradings/accounts",
        },
        {
          icon: "fa-search-dollar",
          text: "Trading\nProducts",
          to: "/tradings/products",
        },
        {
          icon: "mdi-devices",
          text: "Platforms",
          to: "/platforms",
        },
        {
          icon: "fa-info-circle",
          text: "About us",
          to: "/about-us",
        },
        {
          icon: "fa-tools",
          text: "Tools",
          to: "/tools",
        },
        {
          icon: "fa-users",
          text: "Comunity",
          to: "/community",
        },
        {
          icon: "fa-handshake",
          text: "Parteners",
          to: "/parteners",
        },
        {
          icon: "fa-question-circle",
          text: "Support",
          to: "/support",
        },
      ],
    };
  },
};
</script>

<style></style>
