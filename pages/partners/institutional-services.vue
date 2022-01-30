<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Institutional Services</h4>
    <p class="grey--text">
      House of Borse offers a range of turn-key and bespoke solutions for its
      institutional and professional clients. Our institutional clients can
      benefit from our white label solution, FIX API connectivity as well as
      bespoke solutions, dependent on their requirements. Take your business to
      the next level with our technology offering, deep liquidity, fast trade
      execution and professional client support.
    </p>
    <v-divider class="mb-4"></v-divider>
    <v-alert border="left" color="secondary">
      At House of Borse we fully understand that our sophisticated clients
      demand the deepest liquidity, fastest execution and a reliable platform
      from which to execute their trades. With that in mind, we have worked
      tirelessly to secure strong relationships with top tier liquidity
      providers to provide access to the interbank market. The result of this is
      a premium foreign exchange liquidity offering, capable of handling the
      needs of our institutional clients, fund managers and high net worth
      professional traders.
    </v-alert>
    <p class="grey--text">
      Our deep understanding of the financial services sector equips our clients
      with all tools necessary to make the most of the opportunities on offer.
    </p>
    <p class="grey--text">
      We can help you set up as a brokerage through our API offering or as a
      White Label client. We can facilitate access to Tier 1 Banks and brokers,
      as well as look at any bespoke requirements you may have.
    </p>
    <h4>Why HoB is best choice for institutional clients?</h4>
    <ul>
      <li>
        Our business model is design to handle high volume trades and
        institutional partners.
      </li>
      <li>
        Deep liquidity and broad asset choice - Over 200 financial instruments
        including Forex, metals, Commodities, Futures and Equities
      </li>
      <li>Liquidity feeds from Tier 1 banks</li>
      <li>Low cost per trade</li>
      <li>Pure ECN Broker</li>
      <li>No Dealing Desk</li>
      <li>Ultra Fast execution</li>
      <li>FCA regulated broker</li>
    </ul>
    <v-divider class="my-5"></v-divider>
    <h4>Multiple assets offered</h4>
    <ul>
      <li>FX – Over 60 including majors, minors and exotic pairs</li>
      <li>
        Indices – Cash and Futures indices, including markets from the UK,
        Europe. Asia and the UK
      </li>
      <li>
        Equities – Most the well known companies available from the US, Europe
        and UK
      </li>
      <li>
        Commodities – Cash and Futures offered, including the energy markets and
        metals
      </li>
    </ul>
    <v-divider class="my-5"></v-divider>
    <h4>Tailored client propositions</h4>
    <p>
      Our focus is on developing long-term partnerships with our clients. We use
      our financial strength and innovative technology to drive your business
      forward with synthetic, custody, trading and financing solutions.
    </p>
    <p>
      We provide tailored offerings for new and established hedge funds, family
      offices and private investment vehicles, banks and brokers, asset managers
      and introducing brokers.
    </p>
    <v-divider class="my-5"></v-divider>
    <h4>Institutional Partners</h4>
    <stong>Hedge funds</stong>
    <p class="grey--text">
      Get tailored prime brokerage services underpinned by our cutting-edge
    </p>
    <stong>Family offices and private investment vehicles</stong>
    <p class="grey--text">
      Grow your business with personalised solutions to meet your needs, with
      expert support available around the clock.
    </p>
    <stong>Asset managers</stong>
    <p class="grey--text">
      Get the tools to trade efficiently across multiple accounts, with
      customisable reporting solutions for in-depth client analysis
    </p>
    <stong>Banks and Brokers</stong>
    <p class="grey--text">
      Partner with a trusted counterparty for access to an unparalleled range of
      markets and exceptional service
    </p>
    <stong>Introducing Brokers</stong>
    <p class="grey--text">
      Leverage our trusted brand identity to offer your clients our
      market-leading products and platforms.
    </p>
    <v-divider class="my-5"></v-divider>
    <h4>Technology</h4>
    <p class="grey--text">
      House of Borse has always strived to provide its clients with the latest,
      and most proven, trading technologies in order to provide a solid and
      stable trading platform and empower their trading.
    </p>
    <p class="grey--text">
      The trading infrastructure is based on an Electronic Communication Network
      (ECN), which allows for orders to be submitted in a fast, stable and
      secure way.
    </p>
    <p class="grey--text">
      The latest ‘Bridge’ technology is used in order to provide the most secure
      and stable connection between our client’s trading terminal and the
      market.
    </p>
    <p class="grey--text">
      Clients are able to execute trades either via an API or through the highly
      popular MetaTrader 5 (MT5) trading platforms.
    </p>
    <p class="grey--text">
      The MT5 platform are ideal for all types of traders and all types of
      trading strategies and offers a range of analytics to boost trading
      performance.
    </p>
    <p class="grey--text">
      While the FIX API connection allows clients to send orders for execution
      directly to our pricing engine while offering ultra-low latency and
      high-speed connectivity.
    </p>
    <v-card class="secondary">
      <h5 class="text-center grey--text pt-5">To Learn more about our institutional service please</h5>
      <v-card-title class="justify-center mt-0 pt-0"> complete form below </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field dense outlined label="Fullname"></v-text-field>
          <v-text-field dense outlined label="Email"></v-text-field>
          <v-text-field dense outlined label="Country"></v-text-field>
          <v-text-field dense outlined label="Phone"></v-text-field>
          <v-text-field dense outlined label="Website"></v-text-field>
          <v-text-field dense outlined label="Company Name"></v-text-field>
          <v-text-field dense outlined label="Your Message"></v-text-field>
          <v-btn class="primary" block text>Send</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Partners",
          disabled: false,
          to: "/services/partners",
        },
        {
          text: "Institutional Services",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>