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
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img src="/currency/4.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Apple </v-list-item-title>
            <v-list-item-subtitle class="green--text"
              ><v-chip outlined x-small color="white">CFD</v-chip>
              8.35%</v-list-item-subtitle
            >
          </v-list-item-content>
          <v-list-item-action>172.44</v-list-item-action>
        </v-list-item>
        <v-card-text class="px-2">
          <div class="d-flex justify-space-between mb-3">
            <div style="width: 50%">
              <v-btn
                small
                block
                outlined
                @click="topChange = 'current_price'"
                :color="topChange == 'current_price' ? 'primary' : ''"
                >current price
              </v-btn>
            </div>
            <div style="width: 50%">
              <v-btn
                small
                block
                outlined
                @click="topChange = 'specefic_rate'"
                :color="topChange == 'specefic_rate' ? 'primary' : ''"
                >specefic rate</v-btn
              >
            </div>
          </div>
          <v-row class="mt-5">
            <v-col cols="12" v-if="topChange === 'specefic_rate'">
              <v-text-field
                value="178.85"
                dense
                label="Entry price"
              ></v-text-field>
            </v-col>
            <v-col cols="5">
              <v-text-field
                prefix="$"
                value="17.26"
                dense
                label="Investment"
              ></v-text-field>
            </v-col>
            <v-col cols="2" align="center">=</v-col>
            <v-col cols="5">
              <v-text-field value="1.0" dense label="Lot Size"></v-text-field>
            </v-col>
          </v-row>

          <v-alert class="my-3" type="error" dense text
            >You need at least to trade</v-alert
          >
          <v-icon color="red" small>mdi-flash</v-icon> HOB Protector
          <div class="d-flex justify-center my-3">
            <div style="width: 50%">
              <v-btn
                small
                block
                outlined
                @click="otherChange = 'amount'"
                :color="otherChange == 'amount' ? 'primary' : ''"
                >Amount
              </v-btn>
            </div>
            <div style="width: 50%">
              <v-btn
                small
                block
                outlined
                @click="otherChange = 'specefic_rate'"
                :color="otherChange == 'specefic_rate' ? 'primary' : ''"
                >specefic rate
              </v-btn>
            </div>
          </div>
          <div class="d-flex justify-space-between align-center">
            <div>
              <v-text-field
                autofocus
                dense
                hide-details
                label="Stop Loss"
                prefix="$"
                :value="otherChange == 'amount' ? '-8.63' : '0.00'"
              ></v-text-field>
            </div>
            <div style="width:150px;">
              <template v-if="otherChange == 'amount'">164.01</template>
              <template v-else>$ -8.63</template>
            </div>
            <div>
              <v-switch value="true" dense></v-switch>
            </div>
          </div>
          <div class="d-flex justify-space-between align-center">
            <div>
              <v-text-field
                autofocus
                hide-details
                label="Take Profit"
                prefix="$"
                :value="otherChange == 'amount' ? '8.63' : '0.00'"
              ></v-text-field>
            </div>
            <div style="width:150px;">
              <template v-if="otherChange == 'amount'">181.27</template>
              <template v-else>$ 8.63</template>
            </div>
            <div>
              <v-switch value="true" dense></v-switch>
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
      topChange: "current_price",
      otherChange: "amount",
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