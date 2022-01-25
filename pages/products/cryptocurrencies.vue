<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Cryptocurrency</h4>
    <p class="grey--text">
      Crypto currency is a virtual currency, broadly defined as a currency that
      takes form of tokens or “coins” and exists on a distributed and
      decentralised ledger. Cryptocurrency trading is the act of speculating on
      cryptocurrency price movement either via CFDs trading or buying and
      selling the underlying coins.
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
          text: "Cryptocurrencies",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>