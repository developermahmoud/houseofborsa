<template>
  <div>
    <v-card class="primary mb-8">
      <v-card-title>
        <v-btn icon>
          <v-icon color="white">mdi-format-align-center</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        Portfolio Value
        <v-spacer></v-spacer>
        <v-btn icon @click="showCalendar = true">
          <v-icon color="white">mdi-calendar</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="text-center white--text">
        <div class="mb-2">
          <span>$</span> <strong class="display-1">9238.31</strong>
        </div>
        <span>+ $ 170.25 (22.1%) </span>
      </v-card-text>
      <v-btn fab class="white" bottom right absolute @click="dialog = true">
        <v-icon color="primary">mdi-selection-ellipse</v-icon>
      </v-btn>
    </v-card>
    <v-list class="pa-0 transparent mb-2">
      <v-list-item style="min-height: 30px">
        <v-list-item-title>Open Positions Value</v-list-item-title>
        <v-list-item-action-text>$00.00</v-list-item-action-text>
      </v-list-item>
      <v-list-item style="min-height: 30px">
        <v-list-item-title>Available cash</v-list-item-title>
        <v-list-item-action-text>$00.00</v-list-item-action-text>
      </v-list-item>
      <v-list-item style="min-height: 30px">
        <v-list-item-title>Net deposits Amount</v-list-item-title>
        <v-list-item-action-text>$00.00</v-list-item-action-text>
      </v-list-item>
      <v-list-item style="min-height: 30px">
        <v-list-item-title>Withdrawals</v-list-item-title>
        <v-list-item-action-text>$00.00</v-list-item-action-text>
      </v-list-item>
    </v-list>
    <v-list three-line class="mx-2 mb-13 transparent">
      <v-list-item class="secondary rounded mb-3" v-for="i in 5" :key="i">
        <v-list-item-avatar>
          <v-img src="/opengraph.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            >AWS,
            <span class="primary--text">buy 500.00</span></v-list-item-title
          >
          <v-list-item-subtitle
            >30.94
            <v-icon>mdi-arrow-right-thin</v-icon> 30.15</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action class="red--text">
          -395.00
          <br />
          +1.92%
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-dialog v-model="showCalendar" max-width="700" scrollable>
      <v-card class="secondary">
        <v-tabs
          fixed-tabs
          right
          active-class="primary"
          background-color="secondary"
          class="mb-5"
        >
          <v-tab
            >Trading<br />
            history</v-tab
          >
          <v-tab
            >Transfer<br />
            history</v-tab
          >
        </v-tabs>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12">
              <v-select
                v-model="selectedItem"
                :items="[0, 1]"
                dense
                placeholder="Account *"
                outlined
              >
                <template v-slot:selection="{ index }">
                  <v-avatar size="30" v-if="index === 0">
                    <v-img src="/opengraph.png"></v-img>
                  </v-avatar>
                  Margin AWS
                </template>
              </v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                dense
                placeholder="From"
                outlined
                append-icon="mdi-calendar"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                hide-details
                dense
                placeholder="To"
                outlined
                append-icon="mdi-calendar"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn block class="background" text
            ><v-icon>mdi-filter</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" max-width="700" scrollable>
      <v-row no-gutters>
        <v-col cols="4">
          <v-card tile class="secondary py-2 text-center" outlined>
            <v-icon color="primary">mdi-arrow-up-thin</v-icon>
            <br />
            Deposit
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card tile class="secondary py-2 text-center" outlined>
              <v-icon color="primary">mdi-swap-horizontal</v-icon>
              <br />
            Transfer
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card tile class="secondary py-2 text-center" outlined>
            <v-icon color="primary">mdi-arrow-down-thin</v-icon>
            <br />
            Withdraw
          </v-card>
        </v-col>
      </v-row>
    </v-dialog>
  </div>
</template>

<script>
export default {
  layout: "portfolio",
  data() {
    return {
      showCalendar: false,
      dialog: false,
      selectedItem: 0,
    };
  },
};
</script>

<style></style>
