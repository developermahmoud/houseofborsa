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
        <div class="d-flex my-5 mx-3">
          <div style="width:50%;">
            <v-btn text tile block class="red" @click="action = 'sell'">sell</v-btn>
          </div>
          <div style="width:50%;">
            <v-btn text tile block class="green" @click="action = 'buy'">buy</v-btn>
          </div>
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
        <v-card-text>
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
            <div style="font-size:12px;">
              <v-icon size="16" class="mr-1">mdi-wallet</v-icon>Available funds:
              $
              <br />
              <span class="green--text">7650,5555$</span>
            </div>
            <div style="font-size:12px;">
              <v-icon size="16" class="mr-1">mdi-chart-pie</v-icon>Used margin:
              $ <br />
              <span class="green--text">2560,000$</span>
            </div>
          </div>
          <div class="d-flex align-center my-3">
            <v-switch dense v-model="showDetails"></v-switch><img style="width: 20px" src="/Terminal.ico" /> HOB Protector
          </div>
        <template v-if="showDetails">
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
        </template>

        </v-card-text>
        <v-alert class="mx-4 pa-1" color="warning" dense text >
          <div class="d-flex">
            <v-icon class="ml-0 pl-0" color="warning">mdi-exclamation</v-icon>
            <p style="font-size: 12px">Attention! The trade will be executed at market conditions, difference
          with requested price may be significant!</p>
          </div>
        </v-alert>
        <v-card-actions>
          <v-btn
            link
            to="/order?page=invest"
            @click="orderedDialog = true"
            block
            tile
            text
            :class="action == 'buy' ? 'green' : 'red'"
            >place order
          </v-btn>
        </v-card-actions>
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
    type: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      showDetails: false,
      orderedDialog: false,
      action: "buy",
      topChange: "current_price",
      otherChange: "amount",
      toggle_none: null,
    };
  },
  mounted() {
    this.action = this.type
  },
};
</script>

<style>
</style>
