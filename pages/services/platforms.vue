<template>
  <div>
    <v-row>
      <v-col cols="6" class="text-center">
        <v-card
          flat
          class="secondaryBackground pa-2 rounded-lg"
          link
          to="/platforms/metatrader5-platform"
        >
          <v-icon color="primary">fas fa-chart-line</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text">HOB MT5</span>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-card
          flat
          class="secondaryBackground pa-2 rounded-lg"
          link
          href="https://trade.houseofborse.com/"
        >
          <v-icon color="primary">fas fa-globe</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text">HoB WebTrader</span>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-card
          flat
          class="secondaryBackground pa-2 rounded-lg"
          link
          to="/platforms/mobile-trading"
        >
          <v-icon color="primary">fas fa-mobile-alt</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text"
            >Mobile Trading</span
          >
        </v-card>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-card
          flat
          class="secondaryBackground pa-2 rounded-lg"
          link
          to="/platforms/fix-api"
        >
          <v-icon color="primary">fas fa-network-wired</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text">FIX API</span>
        </v-card>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-card
          flat
          class="secondaryBackground pa-2 rounded-lg"
          link
          to="/platforms/download-trading-platform"
        >
          <v-icon color="primary">fas fa-download</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text"
            >Download Trading Platform</span
          >
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>