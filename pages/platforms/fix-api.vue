<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>FIX API</h4>
    <p class="grey--text">
      The House of Borse FIX API solution is ideal for sophisticated traders
      seeking low latency trading as well as the most control over their
      automated trading strategies
    </p>
    <v-divider class="mb-4"></v-divider>
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
          text: "FIX API",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>