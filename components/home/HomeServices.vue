<template>
  <div class="mb-2 secondary rounded pt-3">
    <v-row no-gutters>
      <v-col  class="text-center mb-3" cols="3" v-for="(service, i) in services" :key="i">
        <v-icon size="20" color="primary" v-text="service.icon"></v-icon>
        <br />
        <span style="font-size: 11px">{{ service.text }}</span>
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
        },
        {
          icon: "fa-search-dollar",
          text: "Trading\nProducts",
        },
        {
          icon: "mdi-devices",
          text: "Platforms",
        },
        {
          icon: "fa-info-circle",
          text: "About us",
        },
        {
          icon: "fa-tools",
          text: "Tools",
        },
        {
          icon: "fa-users",
          text: "Comunity",
        },
        {
          icon: "fa-handshake",
          text: "Parteners",
        },
        {
          icon: "fa-question-circle",
          text: "Support",
        },
      ],
    };
  },
};
</script>

<style></style>
