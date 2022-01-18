<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="ml-2">My HOB Card</v-toolbar-title>
        </v-toolbar>
        <v-tabs background-color="transparent" fixed-tabs v-model="tab">
          <v-tab href="#my">My Card</v-tab>
          <v-tab href="#fees">Fees</v-tab>
          <v-tab href="#activity">Activity</v-tab>
        </v-tabs>
        <v-card-text class="mt-3">
          <v-tabs-items v-model="tab" class="transparent">
            <v-tab-item value="my">
              <h2 class="white--text mb-3">My House of Borse Card</h2>
              <v-img src="/HOB-credit-card final png2.png"></v-img>
              <h2 class="white--text my-3">Lost or Stolen Cards</h2>
            </v-tab-item>
            <v-tab-item value="fees">
              <v-expansion-panels   v-model="panel">
                <v-expansion-panel class="secondaryBackground">
                  <v-expansion-panel-header>Limits</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-simple-table class="secondaryBackground">
                      <template v-slot:default>
                        <tbody>
                          <tr>
                            <td>Available Balance</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Amount Left To Load</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Daily Load Limit</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Daily Load Frequency Limit</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Number of Load Left</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Amount Left To Unload</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Number of Cash Transaction Left</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Number of POS Transaction Left</td>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel class="secondaryBackground">
                  <v-expansion-panel-header>Fees</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-simple-table class="secondaryBackground">
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th>Transaction Type</th>
                            <th>Currency</th>
                            <th>Fees</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Online Banking Tool</td>
                            <td></td>
                            <td>FREE</td>
                          </tr>
                          <tr>
                            <td>Monthly Fee</td>
                            <td>USD</td>
                            <td>0.00</td>
                          </tr>
                          <tr>
                            <td>Initial Card order & Activation Fee</td>
                            <td>USD</td>
                            <td>40.00</td>
                          </tr>
                          <tr>
                            <td>International ATM/Cash Withdrawal</td>
                            <td>USD</td>
                            <td>1.3% +3.00</td>
                          </tr>
                          <tr>
                            <td>UK ATM Withdrawal</td>
                            <td>USD</td>
                            <td>0.00</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-tab-item>
            <v-tab-item value="activity">Activity</v-tab-item>
          </v-tabs-items>
          <p class="mt-5">
            We understand that sinking feeling you get when your card’s lost or
            stolen, so we try to make reporting, cancelling and replacing your
            card as stress-free as possible. Let us know right away if your
            Credit or Debit Card is lost or stolen.
          </p>
          <p>
            If your card is lost or stolen, you should immediately block the
            card and order a replacement. You can block and replace your card in
            multiple convenient ways.
          </p>
          <v-btn class="red" text>lost card</v-btn>
        </v-card-text>
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
      tab: "my",
      panel: 0
    };
  },
};
</script>

<style>
</style>