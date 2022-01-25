<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Forex Trading | Online FX Trading</h4>
    <p class="grey--text">
      With daily trade volumes of over $5 trillion, the FX market is the largest
      and most liquid in the world. As a pure ECN Broker, House of Borse Limited
      (‘’HoB’’) provides you with the opportunity to take advantage of this vast
      market, and maximise profitability, by offering one of the most advanced
      FX and CFD trading platforms in the world.
    </p>
    <v-alert border="left" color="secondary">
      House of Borse sends all orders directly in to the market – also known as
      ‘Straight Through Processing’ (STP) - for all account types. We don’t take
      on any client risk thereby ensuring no conflict of interest with our
      clients.
    </v-alert>
    <h4 class="text-center">Key benefits of trading forex through HoB</h4>
    <v-list two-line class="transparent">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Ultra-Low Spreads</v-list-item-title>
          <v-list-item-subtitle
            >Competitive Market Spreads.</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Aggregator of Tier-1 Banks</v-list-item-title>
          <v-list-item-subtitle
            >Access to deep liquidity and a broad range of liquidity
            providers.</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Fast Execution</v-list-item-title>
          <v-list-item-subtitle
            >Execution At Best Available Price With Low
            Latency.</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Matched Principle ECN Broker</v-list-item-title>
          <v-list-item-subtitle
            >We send all trades through to the market so have no conflict of
            interest with our clients.</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Variety Of Products</v-list-item-title>
          <v-list-item-subtitle
            >Access to Different Assets Such as Equities, Forex, Metals,
            etc...</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>FCA UK Regulated</v-list-item-title>
          <v-list-item-subtitle
            >Fully Authorised and Regulated by the FCA in the United
            Kingdom.</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <h4 class="text-center">Reduce Your Trading Cost</h4>
    <v-slide-group
      v-model="toggle_btn"
      mandatory
      active-class="primary"
      center-active
      class="mt-2 mb-4"
      :show-arrows="false"
    >
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          small
          value="0"
          class="secondaryBackground mr-1"
          :input-value="active"
          @click="toggle"
        >
          Common Pairs
        </v-btn>
      </v-slide-item>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          small
          value="1"
          class="secondaryBackground mr-1"
          :input-value="active"
          @click="toggle"
        >
          Minor Pairs
        </v-btn>
      </v-slide-item>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          small
          value="2"
          class="secondaryBackground"
          :input-value="active"
          @click="toggle"
        >
          Exotic Pairs
        </v-btn>
      </v-slide-item>
    </v-slide-group>
    <v-simple-table class="transparent">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Live Spread</th>
            <th>Bid</th>
            <th>Ask</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EURZAR</td>
            <td><span class="red--text">40.5</span></td>
            <td>17.27428</td>
            <td>17.27993</td>
          </tr>
          <tr>
            <td>GBPSEK</td>
            <td><span class="red--text">60.5</span></td>
            <td>17.27428</td>
            <td>17.27993</td>
          </tr>
          <tr>
            <td>USDMXN</td>
            <td><span class="green--text">30.6</span></td>
            <td>17.27428</td>
            <td>17.27993</td>
          </tr>
          <tr>
            <td>GBPZAR</td>
            <td><span class="red--text">30.6</span></td>
            <td>17.27428</td>
            <td>17.27993</td>
          </tr>
          <tr>
            <td>USDTRY</td>
            <td><span class="green--text">194.8</span></td>
            <td>17.27428</td>
            <td>17.27993</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <h4 class="text-center primary--text my-5">
      APPLY NOW AND START TRADING TODAY!
    </h4>
    <v-row>
      <v-col cols="6">
        <v-btn text block outlined color="red">Demo Account</v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn text block outlined color="primary">Live Account</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle_btn: undefined,
      breadcrumbs: [
        {
          text: "Trading Products",
          disabled: false,
          to: "/tradings/products",
        },
        {
          text: "Forex",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>