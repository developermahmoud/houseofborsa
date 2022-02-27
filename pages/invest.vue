<template>
  <div>
    <v-card class="secondary" flat tile>
      <v-card-text class="text-center">
        <v-text-field
          outlined
          prepend-inner-icon="mdi-magnify"
          placeholder="Search Coin Pairs"
          dense
          filled
        ></v-text-field>
        <v-slide-group mandatory v-model="toggle_exclusive">
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >My Watchlist
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Stock
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >ETFs
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Cryptocurrency
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Indices
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Oil
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Forex
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Futures
            </v-btn>
          </v-slide-item>
        </v-slide-group>
      </v-card-text>
      <v-simple-table class="secondary">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Market</th>
              <th>Sell</th>
              <th>Buy</th>
              <th>Change%</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in items" :key="i">
              <td>
                <div
                  class="d-flex"
                  @click="makeDialog = true"
                  style="cursor: pointer"
                >
                  <img
                    :src="item.icon"
                    style="width: 18px; height: 18px"
                    class="mr-2"
                  /><div>{{ item.name }}
                  <template v-if="i == 3">
                    <v-chip x-small>REAL</v-chip>
                  </template>
                  <template v-if="i == 4">
                    <v-chip x-small>CFD</v-chip>
                  </template>
                </div>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  {{ item.subtitle }}
                </div>
              </td>
              <td>
                1.12485
                <br />
                <div class="grey--text caption">Low-1.4222</div>
              </td>
              <td>
                1.12493
                <br />
                <div class="grey--text caption">High-1.6422</div>
              </td>
              <td>
                <v-chip label x-small style="width: 57px" :class="item.color">{{
                  item.change
                }}</v-chip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <invest-make-dialog
      v-if="makeDialog"
      :dialog="makeDialog"
      @close-dialog="makeDialog = false"
    />
  </div>
</template>

<script>
import InvestMakeDialog from "../components/invest/InvestMakeDialog.vue";
export default {
  components: { InvestMakeDialog },
  head() {
    return {
      script: [
        {
          src: "https://s3.tradingview.com/tv.js",
        },
      ],
    };
  },
  data() {
    return {
      toggle_exclusive: null,
      makeDialog: false,
      items: [
        {
          icon: "/currency/1.png",
          name: "BTC",
          subtitle: "Bitcoin vs US Dollar ",
          color: "red",
          change: "0.5%",
        },
        {
          icon: "/currency/usdc.svg",
          name: "XAU/USD",
          subtitle: "Gold vs US Dollar ",
          color: "green",
          change: "10.5%",
        },
        {
          icon: "/currency/3.png",
          name: "SOL",
          subtitle: "Solana Token vs US Dollar ",
          color: "red",
          change: "0.5%",
        },
        {
          icon: "/currency/4.jpg",
          name: "AAPL",
          subtitle: "Apple inc.",
          color: "green",
          change: "10.5%",
        },
        {
          icon: "/currency/4.jpg",
          name: "AAPL",
          subtitle: "Apple inc.",
          color: "green",
          change: "10.5%",
        },
        {
          icon: "/currency/4.png",
          name: "EUR/USD",
          subtitle: "Euro vs US Dollar",
          color: "red",
          change: "0.5%",
        },
        {
          icon: "/currency/eth.svg",
          name: "ETH",
          subtitle: "Ethereum vs US Dollar",
          color: "green",
          change: "10.5%",
        },
        {
          icon: "/opengraph.png",
          name: "AMZN",
          subtitle: "AMZN vs US Dollar",
          color: "green",
          change: "10.5%",
        },
        {
          icon: "/currency/oil.jpg",
          name: "Oil",
          subtitle: "Oil vs US Dollar",
          color: "red",
          change: "0.5%",
        },
        {
          icon: "/currency/gold.jpeg",
          name: "Gold",
          subtitle: "Gold vs US Dollar",
          color: "red",
          change: "0.5%",
        },
        {
          icon: "/currency/silver.jpg",
          name: "Silver",
          subtitle: "Silver vs US Dollar",
          color: "green",
          change: "10.5%",
        },
        {
          icon: "/currency/fb.png",
          name: "FB",
          subtitle: "FB vs US Dollar",
          color: "red",
          change: "0.5%",
        },
        {
          icon: "/currency/TWTR.png",
          name: "TWTR",
          subtitle: "TWTR vs US Dollar",
          color: "green",
          change: "10.5%",
        },
        {
          icon: "/currency/tesla--600.png",
          name: "TSLA",
          subtitle: "TSLA vs US Dollar",
          color: "green",
          change: "10.5%",
        },
        {
          icon: "/currency/symbol-Ripple.jpg",
          name: "Ripple XRP",
          subtitle: "Ripple XRP  vs US Dollar",
          color: "red",
          change: "0.5%",
        },
        {
          icon: "/currency/150x150.png",
          name: "SPY. ETF",
          subtitle: "SPY. ETF vs US Dollar",
          color: "green",
          change: "10.5%",
        },
      ],
    };
  },
};
</script>

<style></style>
