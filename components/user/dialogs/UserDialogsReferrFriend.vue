<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-toolbar-title>Refer a friend</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-tabs background-color="transparent" grow v-model="tab">
          <v-tab href="#refer">Refer</v-tab>
          <v-tab href="#refered">Refered</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="transparent">
          <v-tab-item value="refer">
            <div class="ma-2">
              <div class="text-center">
                Tell your friends to join HOB and we pay you a $25 referral
                bonus
                <v-btn class="blue my-3" small block>invite friends</v-btn>
              </div>
              <div>
                <span class="grey--text">How to get $25 per friend:</span>
                <ul>
                  <li>Tap on the green button and invite your friends</li>
                  <li>Share your personal referral link</li>
                  <li>Get notified when they sign up & check their progress</li>
                  <li>Get Paid directly to your wallet</li>
                </ul>
                <v-btn class="blue my-3" small block>show me the rules</v-btn>
              </div>
              <div>
                <span class="grey--text"
                  >For more info, check these links:</span
                >
                <nuxt-link class="green--text" to="/"
                  >Referral Programme Terms</nuxt-link
                >
              </div>
            </div>
          </v-tab-item>
          <v-tab-item value="refered">
            <div class="ma-2">
              <div class="d-flex justify-space-between">
                <div class="text-center">
                  <span class="grey--text">From</span><br />-
                </div>
                <div class="text-center">
                  <span class="grey--text">To</span><br />
                  -
                  <br />
                  0
                  <br />
                  <span class="grey--text">Friends invited</span>
                </div>
                <div class="text-center">
                  <v-icon color="grey">mdi-calendar</v-icon>
                </div>
              </div>
              <div class="text-center mt-10">
                <v-avatar color="grey" class="mb-2">
                  <v-icon color="black">mdi-account-group</v-icon>
                </v-avatar>
                <br />
                You didn't invite any friends
                 <br />
                <v-btn text small class="mt-2 green">invite friends</v-btn>
              </div>
            </div>
          </v-tab-item>
        </v-tabs-items>
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
      tab: "refer",
    };
  },
};
</script>

<style>
</style>