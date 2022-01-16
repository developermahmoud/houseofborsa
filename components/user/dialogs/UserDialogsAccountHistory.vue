<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="ml-2">Account History</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-title>Open Requests </v-card-title>
        <v-card-text>
          <v-simple-table dense class="secondary">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Summery</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Opened</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3347</td>
                  <td>
                    <div style="width: 150px">Request House of Borse Card</div>
                  </td>
                  <td>Request HOB Card</td>
                  <td>New</td>
                  <td>2022-01-06 10:11:00</td>
                  <td>2022-01-06 10:11:00</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-title> Recently Closed Requests </v-card-title>
        <v-card-text>
          <v-simple-table dense class="secondary">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Summery</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Opened</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3347</td>
                  <td>
                    <div style="width: 150px">Request House of Borse Card</div>
                  </td>
                  <td>Request HOB Card</td>
                  <td>New</td>
                  <td>2022-01-06 10:11:00</td>
                  <td>2022-01-06 10:11:00</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-text>
          <v-alert class="info mt-5">
            House of Borse under no circumstance will not accept funds transfer
            from or to a 3rd Party Account. In all instances funds must only
            come from a bank account/credit card in the name of account holder
            (only). Where funds are withdrawn from a trading account, it is the
            responsibility of the account holder to ensure that there are
            sufficient funds remaining to cover for the margin requirement of
            all open/running positions in that account. This is applicable for
            both funds withdrawal and inter- account transfers. Please note that
            under all circumstances it is client’s responsibility to save guard
            the password and other logion details. HOB will not take any
            responsibility in situation where a client has failed to take
            necessary steps to protect such details.
          </v-alert>
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
};
</script>

<style>
</style>