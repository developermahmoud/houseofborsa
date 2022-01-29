<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Mobile Trading</h4>
    <p class="grey--text">
      With House of Borse’s MT5 Mobile Platform clients can control their
      accounts, trade in the financial markets and use technical indicators for
      market analysis while on the move.
    </p>
    <v-divider class="mb-4"> </v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Platforms",
          disabled: false,
          to: "/services/platforms",
        },
        {
          text: "Mobile Trading",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>