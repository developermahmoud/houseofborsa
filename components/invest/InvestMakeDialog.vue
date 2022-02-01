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
        <v-card-text class="px-0">
          <div class="d-flex justify-space-between align-center">
            <div>
              <v-list-item two-line>
                <v-list-item-avatar>
                  <v-img src="/currency/4.jpg" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    Apple <v-icon small>mdi-chevron-down</v-icon>
                  </v-list-item-title>
                  <v-list-item-subtitle class="green--text"
                    ><v-chip outlined class="px-1" x-small color="white">CFD</v-chip> 6.97%</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </div>
            <div class="mr-2">
              <div><v-icon color="green">mdi-menu-up</v-icon>170.24</div>
              <div><v-icon color="red">mdi-menu-down</v-icon>170.24</div>
            </div>
          </div>
          <div>
            <div class="tradingview-widget-container">
              <div id="tradingview_2e912"></div>
            </div>
          </div>
          <div class="text-center my-5">
            <v-btn x-large text class="green" @click="buyDialog = true"
              ><v-icon>mdi-arrow-top-right-thick</v-icon> Buy</v-btn
            >
            <v-btn x-large text class="red" @click="buyDialog = true"
              ><v-icon>mdi-arrow-bottom-right-thick</v-icon> Sell
            </v-btn>
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
      height: 500,
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