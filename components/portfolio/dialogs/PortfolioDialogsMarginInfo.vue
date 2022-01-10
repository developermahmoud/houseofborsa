<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay>
    <v-card class="secondary">
      <v-toolbar flat class="secondary">
        <v-btn icon @click="$emit('close-dialog')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="ml-2">Margin info</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-0">
        <div class="px-2 mb-2" style="font-size: 11px; line-height: 17px">
          we show you the margin level in real-time to protect your funds the
          calculation consists of your equity (available money) and the margin
          used in all of your currently opened trades the calculation of the
          levels is as follows: (Equity/margin used)*100
        </div>
        <div class="mb-2 mx-1">
          <div class="px-2 red--text" style="background: #5a303c">-100%</div>
          <div
            class="px-2 secondaryBackground"
            style="font-size: 10px; line-height: 17px"
          >
            in the margin level drops below 100% your positions will start
            closing beginning from the most unprofitable one, until there is
            enough margin in your account to sustain any remaining open
            positions . we notify you via App notification and e-mail
          </div>
        </div>
        <div class="mb-2 mx-1">
          <div class="px-2 amber--text" style="background: #463931">-120%</div>
          <div
            class="px-2 secondaryBackground"
            style="font-size: 10px; line-height: 17px"
          >
            if your margin level is below 120% we recommended to fund your
            account or close some losing position we notify you via app
            notification and e-mail
          </div>
        </div>
        <div class="mb-2 mx-1">
          <div class="px-2 green--text" style="background: #354b3f">>120%</div>
          <div
            class="px-2 secondaryBackground"
            style="font-size: 10px; line-height: 17px"
          >
            if margin level is above 120% everything is fine
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
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