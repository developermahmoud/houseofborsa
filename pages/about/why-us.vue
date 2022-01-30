<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>House of Borse – Why Us?</h4>
    <p class="grey--text">
      Since our establishment, we have carved out a reputation as a leader in
      online trading by providing a reliable, user-oriented trading environment
      built on one of the most advanced platforms and regulated by one of the
      most highly regarded regulatory authorities.
    </p>
    <v-divider class="mb-4"></v-divider>
    <v-alert border="left" color="secondary">
      Since House of Borse’s inception in in 2014, the company’s primary mission
      has been to empower people to trade with confidence. With strong core
      values of integrity and innovation, we always put our clients at the
      centre of our efforts into enabling traders of all levels to unleash their
      true potential. Whether it is our customer service, diversity of
      instruments and variety of platforms or any of our other superior services
      – we work hard to ensure our clients have a pleasant trading experience
    </v-alert>
    <h4>Regulation</h4>
    <ul>
      <li>FCA regulated broker (under firm reference number (FRN) 631382)</li>
      <li>Client funds are kept in segregated bank accounts in FCA approved Tier 1 banks</li>
      <li>Compliant with the European Markets in Financial Instruments Directive (MiFID) and MIFID II</li>
    </ul>
    <v-divider class="my-4"></v-divider>
     <h4>Matched Principle ECN Broker</h4>
    <ul>
      <li>Matched principal broker</li>
      <li>All trades executed on an STP basis - No proprietary positions held</li>
      <li>Act solely as an intermediary between our clients, liquidity providers and major exchanges.</li>
      <li>No conflict of interest between our clients and ourselves.</li>
    </ul>
    <v-divider class="my-4"></v-divider>
     <h4>Trading Highlights</h4>
    <ul>
      <li>Competitive Market Spreads.</li>
      <li>Dynamic leverage</li>
      <li>Risk management tools</li>
      <li>Market execution with no requotes</li>
      <li>Low Latency order execution</li>
      <li>Range of markets available - Currencies, commodities, Indices and Equities.</li>
    </ul>
    <v-divider class="my-4"></v-divider>
     <h4>Account Features</h4>
    <ul>
      <li>Mobile trading – iPhone, iPad and Android</li>
      <li>Swap Free trading accounts available</li>
      <li>Personal account management system</li>
      <li>Over 200 financial instruments including Forex, metals, Commodities, Futures and Equities</li>
      <li>Fast and efficient deposit/withdrawal options: Bank Transfer, Credit/Debit Cards</li>
    </ul>
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
          text: "Why us?",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>