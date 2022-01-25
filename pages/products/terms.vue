<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Financial Terms</h4>
    <p class="grey--text">
       House of Borse offers you the opportunity to trade on Foreign Exchange (FX) , Indices, Commodities and Equities using one of the most popular trading platforms in the world - MetaTrader 4. 
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
          text: "Terms",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>