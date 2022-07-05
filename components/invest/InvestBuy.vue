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
        <v-list-item three-line>
          <v-list-item-avatar>
            <v-img src="/currency/4.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Apple </v-list-item-title>
            <v-list-item-subtitle>
              <v-chip-group v-model="typeChip" active-class="green" mandatory>
                <v-chip value="cfd" outlined x-small>CFD</v-chip>
                <v-chip value="real" outlined x-small>Equity</v-chip>
              </v-chip-group>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-icon small>mdi-clock</v-icon>
              <span class="grey--text" style="font-size:12px;'"
                >MARKET OPEN</span
              >
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action-text>
            <v-icon color="green">mdi-chevron-up</v-icon> 109.23<br />
            <v-icon color="red">mdi-chevron-down</v-icon>
            109.24</v-list-item-action-text
          >
        </v-list-item>
        <v-alert class="mx-2" color="info" dense text v-if="typeChip == 'cfd'">
          <v-icon color="info" size="20">mdi-alert-box</v-icon> This symbol is a
          CFD.
        </v-alert>
        <v-alert class="mx-2" color="info" dense text v-else>
          <v-icon color="info" size="20">mdi-alert-box</v-icon> This symbol is a
          Real Stock.
        </v-alert>
        <v-card-text>
          <div class="d-flex justify-space-between pa-1 background rounded-lg">
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
          </div>
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
                      wordValue = 'Value';
                      valuePrefix = '$';
                    "
                  >
                    <v-list-item-title>Value</v-list-item-title>
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
                <div>~0.0268 {{ wordValue == "Value" ? "size" : "$" }}</div>
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
          <v-text-field
            class="mt-2"
            v-if="topChange === 'specefic_rate'"
            value="178.85"
            dense
            label="Entry price"
            type="number"
          ></v-text-field>
          <div style="font-size: 12px">
            <v-icon size="16" class="mr-1">mdi-wallet</v-icon>Available funds:
            <span class="green--text">7650,5555$</span>
          </div>
          <div class="d-flex align-center">
            <v-switch dense v-model="showDetails"></v-switch
            ><img style="width: 20px" src="/Terminal.ico" /> HOB Protector
          </div>
          <template v-if="showDetails">
            <!-- <div
              class="d-flex justify-space-between pa-1 background rounded-lg"
            >
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
            </div> -->
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
                  v-model="stopLossValue"
                  hide-details
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
        <v-alert class="mx-4 pa-1" color="warning" dense text>
          <div class="d-flex">
            <v-icon class="ml-0 pl-0" color="warning">mdi-exclamation</v-icon>
            <p style="font-size: 12px">
              Attention! The trade will be executed at market conditions,
              difference with requested price may be significant!
            </p>
          </div>
        </v-alert>
        <div class="d-flex my-5 mx-3">
          <template v-if="typeChip == 'cfd'">
            <div style="width: 50%">
              <v-btn text tile block class="red" to="/order?page=invest"
                >sell</v-btn
              >
            </div>
            <div style="width: 50%">
              <v-btn text tile block class="green" to="/order?page=invest"
                >buy</v-btn
              >
            </div>
          </template>
          <template v-else>
            <div style="width: 100%">
              <v-btn text tile block class="green" to="/order?page=invest"
                >buy</v-btn
              >
            </div>
          </template>
        </div>
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
    type: {
      required: true,
      type: String,
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
      wordValue: "Value",
      priceInEuru: 50,
      typeChip: "cfd",
      showDetails: false,
      orderedDialog: false,
      action: "buy",
      topChange: "current_price",
      otherChange: "amount",
      toggle_none: null,
    };
  },
  mounted() {
    this.action = this.type;
  },
  methods: {
    autoFocus() {
      document.getElementById("simplePrice").focus();
    },
  },
};
</script>

<style>
.v-slider__thumb-label {
  width: 60px !important;
  height: 30px !important;
}
</style>
