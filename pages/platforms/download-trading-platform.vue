<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Download Trading Platform</h4>
    <p class="grey--text">
      MetaTrader4 has established itself as the platform of choice for the trading community because of its ease of use, functionality and powerful performance. The MT4 platform is ideal for all types traders and all types of trading strategies, whether you are a seasoned trader placing trades through the client terminal or an API client placing automated trades. Use the House of Borse MT4 trader to empower your trading.
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
          text: "Download Trading Platform",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>