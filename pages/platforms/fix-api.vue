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
    <v-alert border="left" color="secondary">
      The Borse FIX API connection allows our professional or sophisticated
      traders to send orders for execution directly to our pricing engine while
      offering ultra-low latency and high-speed connectivity.
    </v-alert>
    <h4>What is the FIX API?</h4>
    <p>
      The Financial Information eXchange (FIX) protocol was developed to enable
      greater connectivity among market participants. It is an international
      standard for electronic trading used by stock exchanges, banks, mutual
      funds, money managers and investment funds.
    </p>
    <p>
      Our FIX API (Application Programming Interface) is the perfect solution
      for traders looking to take advantage of our deep liquidity pools, while
      having ultra-low latency and high-speed connectivity. This application
      allows traders to send orders for execution directly to our pricing
      engine, on forex, indices, energies, metals and soft commodities. Simply
      plug the API into your trading platform to receive price data, submit
      trades, send and modify orders, and receive confirmations.
    </p>
    <div class="my-5">
      <v-img src="https://www.houseofborse.com/img/fix-api.png?123456" />
    </div>
    <h4>Automated trading</h4>
    <p>
      You can use the API to build secure, automated trading systems in the FIX
      protocol. Your system can be set up to access streaming and historical
      price quotes, and place market or limit orders over secure communication
      channels.
    </p>
    <p>
      Any orders you generate will be automatically routed to our liquidity pool
      and executed at any time the markets are open. So our API can give you a
      round-the-clock automated solution for ultra-low latency trading.
    </p>
    <v-divider class="my-5"></v-divider>
    <h4>Other features:</h4>
    <ul>
      <li>Tier-1 high capacity servers in EQUINIX datacentre</li>
      <li>Built specifically for the financial industry</li>
      <li>Providing ultra-low latency executions</li>
      <li>Active and passive order entry</li>
      <li>Access to deep market liquidity</li>
      <li>100% STP/ DMA</li>
    </ul>
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