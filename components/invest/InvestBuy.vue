<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-toolbar-title>New Order</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <div class="text-center my-5">
          <v-btn text small class="red" @click="action = 'sell'">sell</v-btn>
          <v-btn text small class="green" @click="action = 'buy'">buy</v-btn>
        </div>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img src="/currency/4.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Apple </v-list-item-title>
            <v-list-item-subtitle
              ><v-chip outlined class="px-1" x-small color="white">CFD</v-chip>
              <v-icon small>mdi-clock</v-icon>
              <span class="grey--text" style="font-size:12px;'"
                >MARKET OPEN</span
              >
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action
            >$172.44<br />
            <span class="green--text">8.35%</span></v-list-item-action
          >
        </v-list-item>
        <v-card-text class="px-2">
          <div class="d-flex justify-space-between pa-1 background rounded-lg">
            <div style="width: 50%">
              <v-btn
                small
                text
                block
                @click="topChange = 'specefic_rate'"
                :class="topChange == 'specefic_rate' ? 'secondary' : ''"
                >Specfic Price</v-btn
              >
            </div>
            <div style="width: 50%">
              <v-btn
                small
                text
                block
                @click="topChange = 'current_price'"
                :class="topChange == 'current_price' ? 'secondary' : ''"
                >Market Price
              </v-btn>
            </div>
          </div>
          <v-row class="mt-5">
            <v-col cols="12" v-if="topChange === 'specefic_rate'">
              <v-text-field
                value="178.85"
                dense
                label="Entry price"
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="5">
              <v-text-field
                prefix="$"
                value="17.26"
                dense
                label="Investment"
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="2" align="center">=</v-col>
            <v-col cols="5">
              <v-text-field
                type="number"
                value="1.0"
                dense
                label="Position Size"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="d-flex justify-space-between align-center">
            <div><v-icon size="18" class="mr-1">mdi-wallet</v-icon>Available funds: $ </div>
            <div><v-icon size="18" class="mr-1">mdi-chart-pie</v-icon>Used margin: $</div>
          </div>
          <v-alert class="my-3" type="error" dense text
            >You need at least to trade</v-alert
          >
          <div class="d-flex align-center mb-3">
            <img style="width: 20px" src="/Terminal.ico" /> HOB Protector
          </div>

          <div class="d-flex justify-space-between pa-1 background rounded-lg">
            <div style="width: 50%">
              <v-btn
                small
                block
                text
                @click="otherChange = 'amount'"
                :class="otherChange == 'amount' ? 'secondary' : ''"
                >Amount
              </v-btn>
            </div>
            <div style="width: 50%">
              <v-btn
                small
                block
                text
                @click="otherChange = 'specefic_rate'"
                :class="otherChange == 'specefic_rate' ? 'secondary' : ''"
                >Specfic Price
              </v-btn>
            </div>
          </div>
          <div class="d-flex justify-space-between align-center">
            <div>
              <v-text-field
                type="number"
                dense
                hide-details
                prefix="$"
                :value="otherChange == 'amount' ? '-8.63' : '0.00'"
              >
                <template v-slot:label>
                  <strong class="red--text body-1">Stop Loss</strong>
                </template>
              </v-text-field>
            </div>
            <div style="width: 150px">
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
                type="number"
                hide-details
                prefix="$"
                :value="otherChange == 'amount' ? '8.63' : '0.00'"
              >
                <template v-slot:label>
                  <strong class="green--text body-1">Take Profit</strong>
                </template>
              </v-text-field>
            </div>
            <div style="width: 150px">
              <template v-if="otherChange == 'amount'">181.27</template>
              <template v-else>$ 8.63</template>
            </div>
            <div>
              <v-switch :value="true" dense></v-switch>
            </div>
          </div>
        </v-card-text>
        <v-alert class="mx-4" type="warning" dense text style="font-size: 12px">
          Attention! The trade will be executed at market conditions, difference
          with requested price may be significant!
        </v-alert>
        <v-card-actions>
          <!-- <v-btn @click="orderedDialog=true" block text :class="action == 'buy' ? 'green' : 'red'"
            ><v-icon
              >mdi-arrow-{{
                action == "buy" ? "top" : "bottom"
              }}-right-thick</v-icon
            >
            {{ action }}
          </v-btn> -->
          <v-btn @click="orderedDialog=true" block text class="grey"
            >place order
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <invest-ordered
      v-if="orderedDialog"
      :dialog="orderedDialog"
      @close-dialog="orderedDialog = false"
    />
  </div>
</template>

<script>
import InvestOrdered from "./InvestOrdered.vue";
export default {
  components: { InvestOrdered },
  props: {
    dialog: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      orderedDialog: false,
      action: "buy",
      topChange: "current_price",
      otherChange: "amount",
      toggle_none: null,
    };
  },
  mounted() {},
};
</script>

<style>
</style>