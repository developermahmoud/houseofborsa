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
        <v-btn icon>
          <v-icon color="white">mdi-calendar</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="text-center white--text">
        <div class="mb-2">
          <span>$</span> <strong class="display-1">9238.31</strong>
        </div>
        <span>+ $ 170.25 (22.1%) </span>
      </v-card-text>
      <v-btn fab class="white" bottom right absolute>
        <v-icon color="primary">mdi-selection-ellipse</v-icon>
      </v-btn>
    </v-card>
    <v-list class="pa-0 transparent mb-2">
      <v-list-item style="min-height:30px;">
        <v-list-item-title>Open Positions Value</v-list-item-title>
        <v-list-item-action-text>$00.00</v-list-item-action-text>
      </v-list-item>
      <v-list-item style="min-height:30px;">
        <v-list-item-title>Available cash</v-list-item-title>
        <v-list-item-action-text>$00.00</v-list-item-action-text>
      </v-list-item>
      <v-list-item style="min-height:30px;">
        <v-list-item-title>Net deposits Amount</v-list-item-title>
        <v-list-item-action-text>$00.00</v-list-item-action-text>
      </v-list-item>
      <v-list-item style="min-height:30px;">
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
          <v-list-item-title>AWS, <span class="primary--text">buy 500.00</span></v-list-item-title>
          <v-list-item-subtitle>30.94 <v-icon>mdi-arrow-right-thin</v-icon> 30.15</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="red--text">
          -395.00
          <br />
          +1.92%
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  layout: "portfolio",
  data() {
    return {
      value: [423, 446, 675, 510, 590, 610, 760],
    };
  },
};
</script>

<style></style>
