<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="secondary">
        <v-card-title class="secondary mx-0 px-2">
          <v-btn small icon @click="$emit('close-dialog')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          Market Data
          <v-spacer></v-spacer>
        </v-card-title>
        <v-divider></v-divider>
        <h4 class="ml-2 my-3">MT5 Global, MMA</h4>
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <v-card
              flat
              class="transparent mx-2"
              style="border: solid 1px #1f2033 !important"
            >
              <v-card-title>Basic - (Free)</v-card-title>
              <v-card-subtitle>Free of charge</v-card-subtitle>
              <v-card-text>
                Free and easy instruement to manage your position by entering
                orders in an easy order mask with best bind/ask prices, Perfect
                for beginners
                <br />
                <strong>You see:</strong>
                <ul>
                  <li>FX, crypto, commodities CFDs and future</li>
                  <li>NYSE/Nasdaq (US Stocks) 15min delayed</li>
                  <li>MOEX (listing) - forwards</li>
                  <li>major world exchange Europe/Asia</li>
                </ul>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="primary" text>Activate</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-card
              flat
              class="transparent mx-2"
              style="
                border: solid 1px #1f2033 !important;
                border-top: solid 2px green !important;
              "
            >
              <v-card-title
                >Advanced - (Paid)
                <v-spacer></v-spacer>
                <v-chip color="green" small label>active</v-chip>
              </v-card-title>
              <v-card-subtitle
                >$1 a month or free of charge if 1 trade a
                month</v-card-subtitle
              >
              <v-card-text>
                Clear pictire of stock, currency, crypto and commodities markets
                every second of a day!
                <br />
                <strong>Additionally</strong> to the basic version you see:
                <v-checkbox hide-details>
                  <template v-slot:label>
                    <div style="font-size: 12px">
                      NYSE/Nasdaq(US stocks) realtime incl.Market watch window
                    </div></template
                  ></v-checkbox
                >
                <v-checkbox hide-details>
                  <template v-slot:label>
                    <div style="font-size: 12px">US stocks CFDs</div></template
                  >
                </v-checkbox>
                <v-checkbox hide-details>
                  <template v-slot:label>
                    <div style="font-size: 12px">
                      MOEX (listing) - forwards incl, Market watch window
                    </div></template
                  >
                </v-checkbox>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="primary" text>Activate</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-checkbox class="mx-2">
          <template v-slot:label>
            <div style="font-size: 12px">
              Pleas note: Market data is for private use only, A change between
              platform versions can be done once a calendar day.
            </div>
          </template>
        </v-checkbox>
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
};
</script>

<style>
</style>