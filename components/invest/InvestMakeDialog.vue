<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-toolbar-title>Symbol Chart</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon class="mr-2">mdi-bell</v-icon>
          <v-icon color="amber">mdi-star</v-icon>
        </v-toolbar>
        <v-row>
          <v-col cols="9">
            <v-list-item two-line class="pl-1">
              <v-list-item-avatar>
                <v-img src="/currency/4.jpg" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  Apple <v-icon small>mdi-chevron-down</v-icon>
                </v-list-item-title>
                <v-list-item-subtitle class="green--text"
                  ><v-chip outlined class="px-1" x-small color="white"
                    >CFD</v-chip
                  >
                  <v-icon small color="primary">mdi-clock</v-icon>
                  <span class="caption white--text">MARKET OPEN</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="3">
            <div class="caption mt-2">
              <v-icon small color="green">mdi-menu-up</v-icon>17.24
            </div>
            <div class="caption">
              <v-icon small color="red">mdi-menu-down</v-icon>17.24
            </div>
            <div class="caption ml-1 green--text">6.97%</div>
          </v-col>
        </v-row>
        <v-card-text class="px-0">
          <div>
            <div class="tradingview-widget-container">
              <div id="tradingview_2e912"></div>
            </div>
          </div>
          <div class="text-center my-5">
            <v-btn x-large text class="red" @click="buyDialog = true"
              ><v-icon>mdi-arrow-bottom-right-thick</v-icon> Sell
            </v-btn>
            <v-btn x-large text class="green" @click="buyDialog = true"
              ><v-icon>mdi-arrow-top-right-thick</v-icon> Buy</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <invest-buy
      v-if="buyDialog"
      :dialog="buyDialog"
      @close-dialog="buyDialog = false"
    />
  </div>
</template>

<script>
import InvestBuy from "./InvestBuy.vue";
export default {
  components: { InvestBuy },
  props: {
    dialog: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      buyDialog: false,
    };
  },
  mounted() {
    new TradingView.widget({
      width: "100%",
      height: window.innerHeight - 230,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_2e912",
    });
  },
};
</script>

<style>
</style>