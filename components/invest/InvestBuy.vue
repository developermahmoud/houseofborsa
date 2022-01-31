<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text class="mt-5 px-2">
          <div class="d-flex justify-center mb-3">
            <v-btn small outlined color="grey">current price </v-btn>
            <v-btn small outlined text>specefic rate </v-btn>
          </div>
          <v-row>
            <v-col>
              <v-text-field dense label="Investment"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field dense label="Lot Size"></v-text-field>
            </v-col>
          </v-row>
          <v-alert class="my-3" type="error" dense text>You need at least to trade</v-alert>
          <v-icon color="red" small>mdi-flash</v-icon> HOB Protector
          <div class="d-flex justify-center my-3">
            <v-btn small outlined color="grey">Amount </v-btn>
            <v-btn small outlined text>specefic rate </v-btn>
          </div>
          <div class="d-flex justify-space-between align-center">
            <div>
              <v-text-field
                autofocus
                dense
                hide-details
                label="Stop Loss"
                color="red"
              ></v-text-field>
            </div>
            <div>
              <v-switch dense></v-switch>
            </div>
          </div>
          <div class="d-flex justify-space-between align-center">
            <div>
              <v-text-field
                autofocus
                hide-details
                label="Take Profit"
                color="green"
              ></v-text-field>
            </div>
            <div>
              <v-switch dense></v-switch>
            </div>
          </div>
          <div class="text-center mt-2">
            <v-btn-toggle v-model="toggle_none" background-color="secondary">
              <v-btn small class="secondary"> Short </v-btn>
              <v-btn small class="green"> Long </v-btn>
            </v-btn-toggle>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      toggle_none: null,
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