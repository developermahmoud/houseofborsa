<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-toolbar-title>Symbol Details</v-toolbar-title>
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
                    >6.97%</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </div>
            <div class="mr-2">
              <div><v-icon color="green">mdi-menu-up</v-icon>170.24</div>
              <div><v-icon color="red">mdi-menu-down</v-icon>170.19</div>
            </div>
          </div>
          <v-alert type="info" dense text class="mx-2"
            >This symbol is a CFD.</v-alert
          >
          <div>
            <!-- TradingView Widget BEGIN -->
            <div class="tradingview-widget-container">
              <div id="tradingview_2e912"></div>
            </div>
          </div>
          <v-row class="mt-2 mx-2">
            <v-col>
              <v-btn block small outlined color="red" @click="buyDialog = true">
                <v-icon small>mdi-arrow-down</v-icon> Short
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                block
                small
                outlined
                color="green"
                @click="buyDialog = true"
              >
                <v-icon small>mdi-arrow-up</v-icon> Long
              </v-btn>
            </v-col>
          </v-row>
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
      height: 400,
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