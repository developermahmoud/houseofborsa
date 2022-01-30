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
    <h4>
      How to Download MT5 Multi-asset the House of Borse Platform for Mobile
      Devices.
    </h4>
    <p>
      HoB MT5 - one of the most popular trading platforms in the world Follow
      the markets on-the-go with our mobile trading platforms.
    </p>
    <p>
      Monitor your positions and react quickly to market movements 24 hours a
      day. You can trade Stocks, ETFs, Futures, Indices, Forex, and Commodities
      all from your smartphone or tablet is now also available for the iPhone,
      iPad and android operating systems absolutely free of charge.
    </p>
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/HifCwkJxBR0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <h4 class="mt-5">Some of the key features of the MT5 mobile app are:</h4>
    <ul>
      <li>Easy to use for everyday trading</li>
      <li>Easy withdrawal and deposit from the application</li>
      <li>Real-time streaming quotes</li>
      <li>Interactive charts with zoom and scroll</li>
      <li>Full set of trade orders, including pending orders</li>
      <li>Retrievable history of completed trade transactions</li>
      <li>A range of technical indicators</li>
      <li>Range of chart types - Japanese candlesticks and line charts</li>
      <li>View and amend multiple Watch Lists</li>
      <li>Offline mode (symbol prices and charts)</li>
      <li>Multiple languages, including Chinese, Spanish and Arabic</li>
    </ul>

    <div class="my-5">
      <v-img src="https://www.houseofborse.com/img/mobile-trading.png" />
    </div>
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