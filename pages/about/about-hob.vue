<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>About House of Borse</h4>
    <p class="grey--text">
      House of Borse is an international financial services firm that is
      authorized and regulated by the Financial Conduct Authority, under Firm
      Reference Number (FRN) 631382. Through House of Borse, and the globally
      renowned Metatrader 4 platform, our clients can trade a wide variety of
      markets, including foreign exchange, commodities and indices 24/ 5. Take
      advantage of deep liquidity, tight spreads, mobile trading and much more.
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
          text: "About US",
          disabled: false,
          to: "/services/about-us",
        },
        {
          text: "About HOB",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>