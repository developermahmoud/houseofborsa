<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>ETFs</h4>
    <p class="grey--text">
      An ETF (Exchange Traded Fund) – is an investment fund traded on Stock
      Exchanges, much like Stocks. As these are traded on an Exchange the price
      of ETF’s shares changes throughout the trading day as shares are bought
      and sold on the market.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Trading Products",
          disabled: false,
          to: "/tradings/products",
        },
        {
          text: "ETFs",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>