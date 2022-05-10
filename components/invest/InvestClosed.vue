<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-toolbar-title>Close Order</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img src="/currency/4.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Buy AAPL </v-list-item-title>
            <v-list-item-subtitle>
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
          <v-row class="mt-5">
            <v-col cols="6">
              <v-text-field
                prefix="$"
                value="17.26"
                hide-details
                dense
                disabled
                type="number"
              >
                <template v-slot:label>
                  <strong class="body-1">Open Price</strong>
                </template>
              </v-text-field>
              <span class="caption">2022.01.11 14:18</span>
            </v-col>
            <v-col cols="6">
              <v-text-field
                type="number"
                value="1.33"
                disabled
                hide-details
                prefix="$"
                dense
              >
                <template v-slot:label>
                  <strong class="body-1">CURRENT P/L</strong>
                </template>
              </v-text-field>
              <span class="caption green--text"> 12%</span>
            </v-col>
          </v-row>
          <div class="mt-5">
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on">
                    {{ wordValue }}
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list class="py-0 secondary" dense>
                  <v-list-item
                    @click="
                      wordValue = 'Invested';
                      valuePrefix = '$';
                    "
                  >
                    <v-list-item-title>Invested</v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    @click="
                      wordValue = 'Position size';
                      valuePrefix = '';
                    "
                  >
                    <v-list-item-title>Position size</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
            <div class="d-flex justify-space-between align-center">
              <v-icon @click="autoFocus()">mdi-cash-multiple</v-icon>
              <div class="text-center">
                <v-text-field
                  type="number"
                  id="simplePrice"
                  dense
                  hide-details
                  single-line
                  class="mx-auto"
                  style="width: 60px; font-size: 25px; text-align: center"
                  :prefix="valuePrefix"
                  v-model="priceInEuru"
                ></v-text-field>
                <div>~0.0268 {{ wordValue == "Invested" ? "size" : "$" }}</div>
              </div>
              <v-icon @click="autoFocus()">mdi-dialpad</v-icon>
            </div>
            <v-slider
              thumb-color="transparent"
              max="100"
              min="0"
              hide-details
              thumb-label
              v-model="priceInEuru"
            >
              <template v-slot:thumb-label="{ value }">
                {{ value + "%" }}
              </template>
            </v-slider>
          </div>
          <!-- <v-row class="mt-5">
            <v-col cols="12" v-if="topChange === 'specefic_rate'">
              <v-text-field value="178.85" dense disabled type="number">
                <template v-slot:label>
                  <strong class="body-1">Entry price</strong>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="5">
              <v-text-field
                prefix="$"
                value="17.26"
                dense
                disabled
                type="number"
              >
                <template v-slot:label>
                  <strong class="body-1">Investment</strong>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="2" align="center">=</v-col>
            <v-col cols="5">
              <v-text-field type="number" value="1.0" disabled dense>
                <template v-slot:label>
                  <strong class="body-1">Position Size</strong>
                </template>
              </v-text-field>
            </v-col>
          </v-row> -->
          <div class="d-flex align-center mb-3">
            <v-icon small class="mr-1">mdi-wallet</v-icon> Available funds:
            <strong class="green--text">0.85 $</strong>
          </div>
          <div class="d-flex align-center">
            <v-switch dense v-model="showDetails"></v-switch
            ><img style="width: 20px" src="/Terminal.ico" /> HOB Add Protector
          </div>
          <template v-if="showDetails">
            <div class="d-flex justify-space-between align-center mt-3">
              <div style="width: 48%">
                <div>
                  <strong class="red--text body-1">Stop Loss</strong>
                  <v-icon @click="sheetStopLoss = true" small color="grey"
                    >mdi-information-outline</v-icon
                  >
                </div>
                <v-text-field
                  type="number"
                  dense
                  hide-details
                  v-model="stopLossValue"
                  :prefix="otherChange == 'amount' ? '$' : ''"
                  @click="
                    dialogStopLoss = true;
                    stopLossValueSheet = 0;
                  "
                >
                </v-text-field>
                <div>
                  {{
                    stopLossValue == 0 ? 0 : (stopLossValue * 0.1).toFixed(2)
                  }}
                </div>
              </div>
              <div style="width: 48%">
                <div>
                  <strong class="green--text body-1">Take Profit</strong>
                  <v-icon small color="grey" @click="sheetTakeProfit = true"
                    >mdi-information-outline</v-icon
                  >
                </div>
                <v-text-field
                  type="number"
                  v-model="takeProfitValue"
                  @click="
                    dialogTakeProfit = true;
                    takeProfitValueSheet = 0;
                  "
                  dense
                  hide-details
                  :prefix="otherChange == 'amount' ? '$' : ''"
                >
                </v-text-field>
                <div>
                  {{
                    takeProfitValue == 0
                      ? 0
                      : (takeProfitValue * 0.1).toFixed(2)
                  }}
                </div>
              </div>
            </div>
          </template>
        </v-card-text>
        <v-alert class="mx-4" type="warning" dense text style="font-size: 12px">
          Attention! The trade will be executed at market conditions, difference
          with requested price may be significant!
        </v-alert>
        <v-card-text class="text-center">
          <v-btn text small class="primary" link to="/order?page=portfolio"
            >update order</v-btn
          >
          <v-btn text small class="red" link to="/order?page=portfolio"
            >close order</v-btn
          >
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-bottom-sheet v-model="sheetStopLoss">
      <div class="secondary pa-3">
        <h3>Stop Loss</h3>
        <p>
          When the price reaches "Stop loss" you have set, the position will be
          automatically closed to limit the loss to a smaller range.
        </p>
      </div>
    </v-bottom-sheet>
    <v-bottom-sheet v-model="sheetTakeProfit">
      <div class="secondary pa-3">
        <h3>Take Profit</h3>
        <p>
          When the price reaches "Take profit" you have set, the position will
          be automatically closed to gain profits.
        </p>
      </div>
    </v-bottom-sheet>
    <v-bottom-sheet v-model="dialogStopLoss">
      <v-card class="secondary">
        <v-card-title>Stop Loss</v-card-title>
        <v-card-title>
          <v-spacer></v-spacer>
          <span></span>
        </v-card-title>
        <v-card-text>
          <div class="d-flex justify-space-between align-center">
            <div></div>
            <div class="grey--text">Price {{ stopLossValueSheet }}</div>
            <div class="grey--text">
              Pipe
              {{
                stopLossValueSheet == 0
                  ? 0
                  : (stopLossValueSheet * 0.1).toFixed(2)
              }}
            </div>
          </div>
          <v-slider
            v-model="stopLossValueSheet"
            thumb-label="always"
            thumb-color="transparent"
            min="0"
            hide-details
            max="218"
          >
            <template v-slot:thumb-label="{ value }">
              {{ value + " USD" }}
            </template>
            <template v-slot:prepend>
              <v-icon @click="--stopLossValueSheet"> mdi-minus </v-icon>
            </template>
            <template v-slot:append>
              <v-icon @click="++stopLossValueSheet"> mdi-plus </v-icon>
            </template>
          </v-slider>
        </v-card-text>
        <v-card-actions>
          <v-btn text width="50%" @click="dialogStopLoss = false">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            class="primary"
            width="50%"
            @click="
              stopLossValue = stopLossValueSheet;
              dialogStopLoss = false;
            "
            >Confirm</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
    <v-bottom-sheet v-model="dialogTakeProfit">
      <v-card class="secondary">
        <v-card-title>Take Profit</v-card-title>
        <v-card-title>
          <v-spacer></v-spacer>
          <span></span>
        </v-card-title>
        <v-card-text>
          <div class="d-flex justify-space-between align-center">
            <div></div>
            <div class="grey--text">Price {{ takeProfitValueSheet }}</div>
            <div class="grey--text">
              Pipe
              {{
                takeProfitValueSheet == 0
                  ? 0
                  : (takeProfitValueSheet * 0.1).toFixed(2)
              }}
            </div>
          </div>
          <v-slider
            v-model="takeProfitValueSheet"
            thumb-label="always"
            thumb-color="transparent"
            min="0"
            hide-details
            max="218"
          >
            <template v-slot:thumb-label="{ value }">
              {{ value + " USD" }}
            </template>
            <template v-slot:prepend>
              <v-icon @click="--takeProfitValueSheet"> mdi-minus </v-icon>
            </template>
            <template v-slot:append>
              <v-icon @click="++takeProfitValueSheet"> mdi-plus </v-icon>
            </template>
          </v-slider>
        </v-card-text>
        <v-card-actions>
          <v-btn text width="50%" @click="dialogTakeProfit = false"
            >Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            text
            class="primary"
            width="50%"
            @click="
              takeProfitValue = takeProfitValueSheet;
              dialogTakeProfit = false;
            "
            >Confirm</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
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
      stopLossValue: 0,
      takeProfitValue: 0,
      stopLossValueSheet: 0,
      takeProfitValueSheet: 0,
      sheetStopLoss: false,
      sheetTakeProfit: false,
      dialogStopLoss: false,
      dialogTakeProfit: false,
      valuePrefix: "$",
      wordValue: "Invested",
      priceInEuru: 100,
      action: "buy",
      showDetails: false,
      topChange: "current_price",
      otherChange: "amount",
      toggle_none: null,
    };
  },
  mounted() {},
  methods: {
    autoFocus() {
      document.getElementById("simplePrice").focus();
    },
  },
};
</script>

<style>
#plPrice {
  color: green;
}
</style>
