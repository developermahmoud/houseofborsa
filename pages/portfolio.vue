<template>
  <div>
    <v-card class="primary mb-10">
      <v-card-title>
        <v-btn icon>
          <v-icon color="white">mdi-format-align-center</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        WALLET
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="white">mdi-qrcode</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="text-center white--text">
        <div class="mb-2"><span>$</span> <strong class="display-1">9238.31</strong></div>
        <span>+ $ 170.25 (22.1%) </span>
      </v-card-text>
      <v-btn fab class="white" bottom right absolute>
        <v-icon color="primary">mdi-selection-ellipse</v-icon>
      </v-btn>
    </v-card>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>My Wallet</v-list-item-title>
        <v-list-item-subtitle
          >$42.8 (+2.1%)
          <v-icon color="green">mdi-arrow-up-thin</v-icon></v-list-item-subtitle
        >
      </v-list-item-content>
      <v-list-item-action>
        <v-btn plain color="cyan">Add COIN</v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-list class="pa-0 transparent">
      <v-list-item class="secondary rounded mb-3" v-for="i in 5" :key="i">
        <v-list-item-avatar>
          <v-img src="/opengraph.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>BTC</v-list-item-title>
          <v-list-item-subtitle>$ 845</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action style="width: 80px">
          <v-sparkline
            :value="value"
            color="rgba(255, 255, 255, .7)"
            width="150"
            height="80"
            stroke-linecap="round"
            smooth
          >
            <template v-slot:label="item"> ${{ item.value }} </template>
          </v-sparkline>
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
