<template>
  <div>
    <v-row no-gutters>
      <v-col>
        <v-card class="secondary" tile flat active-class="primary">
          <h6 class="pa-2 pb-0 mb-0" style="font-size: 10px;">
            <v-icon x-small class="mr-1" color="purple"
              >mdi-checkbox-blank-circle</v-icon
            >
            DOW JONES
          </h6>
          <div class="pa-2">
            <h4>33,54,34</h4>
            <strong class="green--text">+5.82%</strong>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="secondary mx-2" flat tile active-class="primary">
          <h6 class="pa-2 pb-0 mb-0">
            <v-icon x-small class="mr-1" color="cyan"
              >mdi-checkbox-blank-circle</v-icon
            >
            S&P 500
          </h6>
          <div class="pa-2">
            <h4>42,65,34</h4>
            <strong class="green--text">+2.14%</strong>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="secondary" tile flat active-class="primary">
          <h6 class="pa-2 pb-0 mb-0">
            <v-icon x-small class="mr-1" color="orange"
              >mdi-checkbox-blank-circle</v-icon
            >
            NASDAQ
          </h6>
          <div class="pa-2">
            <h4>12,84,34</h4>
            <strong class="green--text">+2.92%</strong>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-card class="mt-5 secondary" flat tile>
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
              <th>Chart</th>
              <th>List Price</th>
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
                  />
                  <div>
                    {{ item.name }}
                    <v-chip outlined label x-small color="primary">{{
                      item.percentage
                    }}</v-chip>
                  </div>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  {{ item.subtitle }}
                </div>
                <div :class="`${item.color}--text`">
                  {{
                    item.change
                  }}
                </div>
              </td>
              <td>
                <div style="width: 70px;">
                  <v-sparkline
                    :color="item.color"
                    :value="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                    smooth="10"
                    padding="8"
                    line-width="5"
                    :stroke-linecap="'round'"
                    :fill="false"
                    :type="'trend'"
                    :auto-line-width="false"
                    auto-draw
                  ></v-sparkline>
                </div>

              </td>
              <td>
                <div style="width:120px;">
                  <div class="text-center">
                    <v-chip label small :color="item.color">
                      1.12485
                    </v-chip>
                  </div>

                  <div class="caption grey--text mt-2">
                    L: 1.4333. H: 1.4555
                  </div>
                </div>

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
          percentage: "10X",
        },
        {
          icon: "/currency/usdc.svg",
          name: "XAU/USD",
          subtitle: "Gold vs US Dollar ",
          color: "green",
          change: "10.5%",
          percentage: "8X",
        },
        {
          icon: "/currency/3.png",
          name: "SOL",
          subtitle: "Solana Token vs US Dollar ",
          color: "red",
          change: "0.5%",
          percentage: "10X",
        },
        {
          icon: "/currency/4.jpg",
          name: "AAPL",
          subtitle: "Apple inc.",
          color: "green",
          change: "10.5%",
          percentage: "10X",
        },
        {
          icon: "/currency/4.png",
          name: "EUR/USD",
          subtitle: "Euro vs US Dollar",
          color: "red",
          change: "0.5%",
          percentage: "9X",
        },
        {
          icon: "/currency/eth.svg",
          name: "ETH",
          subtitle: "Ethereum vs US Dollar",
          color: "green",
          change: "10.5%",
          percentage: "10X",
        },
        {
          icon: "/opengraph.png",
          name: "AMZN",
          subtitle: "AMZN vs US Dollar",
          color: "green",
          change: "10.5%",
          percentage: "7X",
        },
        {
          icon: "/currency/oil.jpg",
          name: "Oil",
          subtitle: "Oil vs US Dollar",
          color: "red",
          change: "0.5%",
          percentage: "10X",
        },
        {
          icon: "/currency/gold.jpeg",
          name: "Gold",
          subtitle: "Gold vs US Dollar",
          color: "red",
          change: "0.5%",
          percentage: "5X",
        },
        {
          icon: "/currency/silver.jpg",
          name: "Silver",
          subtitle: "Silver vs US Dollar",
          color: "green",
          change: "10.5%",
          percentage: "10X",
        },
        {
          icon: "/currency/fb.png",
          name: "FB",
          subtitle: "FB vs US Dollar",
          color: "red",
          change: "0.5%",
          percentage: "10X",
        },
        {
          icon: "/currency/TWTR.png",
          name: "TWTR",
          subtitle: "TWTR vs US Dollar",
          color: "green",
          change: "10.5%",
          percentage: "10X",
        },
        {
          icon: "/currency/tesla--600.png",
          name: "TSLA",
          subtitle: "TSLA vs US Dollar",
          color: "green",
          change: "10.5%",
          percentage: "12X",
        },
        {
          icon: "/currency/symbol-Ripple.jpg",
          name: "Ripple XRP",
          subtitle: "Ripple XRP  vs US Dollar",
          color: "red",
          change: "0.5%",
          percentage: "5X",
        },
        {
          icon: "/currency/150x150.png",
          name: "SPY. ETF",
          subtitle: "SPY. ETF vs US Dollar",
          color: "green",
          change: "10.5%",
          percentage: "10X",
        },
      ],
    };
  },
};
</script>

<style></style>
