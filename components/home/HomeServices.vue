<template>
  <div>
    <v-card class="secondary mb-5" flat>
      <v-card-text class="text-center">
        <v-row align="center" justify="center">
          <v-col cols="3" v-for="(service, i) in services" :key="i">
            <v-icon size="20" color="primary" v-text="service.icon"></v-icon>
            <br />
            <span style="font-size:11px;">{{ service.text }}</span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          icon: "fa-user-circle",
          text: "Accounts",
        },
        {
          icon: "fa-search-dollar",
          text: "Markets",
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
