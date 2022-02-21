<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="secondary">
        <v-toolbar flat class="background">
          <v-btn icon @click="$emit('close-dialog')"
            ><v-icon>mdi-close</v-icon></v-btn
          >
          <v-toolbar-title> Copy </v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-avatar tile>
            <v-img src="/avatar.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              >HLadislave Hervay</v-list-item-title
            >
            <v-list-item-subtitle>
              <v-icon color="cyan">mdi-flag</v-icon> Englang
            </v-list-item-subtitle>
            <v-list-item-subtitle
              ><strong class="green--text">32.51%</strong
              ><span class="caption"
                >12 MONTHLS RETURN</span
              ></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-card-text class="mt-5">
          <strong class="white--text">Amount</strong>
          <div
            class="d-flex justify-space-between align-center rounded-lg mt-3"
            style="border: solid 1px #fff"
          >
            <v-btn icon @click="--amount">
              <v-icon color="primary">mdi-minus</v-icon>
            </v-btn>
            <div class="text-center">
              {{ amount }}
            </div>
            <v-btn icon @click="++amount">
              <v-icon  color="primary">mdi-plus</v-icon>
            </v-btn>
          </div>
          <p class="mt-3">Stop copying if <strong class="red--text">copy value drops below:</strong> <strong class="white--text">$16.00</strong></p>
           <div
            class="d-flex justify-space-between align-center mt-3"
          >
          <div>RATIO</div>
          <div><v-icon>mdi-swap-horizontal</v-icon> AMOUNT</div>
           </div>
          <div
            class="d-flex justify-space-between align-center rounded-lg mt-3"
            style="border: solid 1px #fff"
          >
            <v-btn icon @click="--ratio">
              <v-icon color="primary">mdi-minus</v-icon>
            </v-btn>
            <div class="text-center">
              {{ ratio }}
            </div>
            <v-btn icon @click="++ratio">
              <v-icon  color="primary">mdi-plus</v-icon>
            </v-btn>
          </div>
          <div class="text-center my-3">
              MIN <strong class="white--text">5.00%</strong> MAX <strong class="white--text">95.00%</strong>
          </div>
          <v-checkbox label="Copy Open Trades"></v-checkbox>
        </v-card-text>
        <v-btn block class="primary mb-0 pb-0" width="100%" tile fixed bottom
          >Copy Trader</v-btn
        >
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
  data() {
    return {
      amount: 300,
      ratio: 1000
    };
  },
};
</script>

<style>
</style>