<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-toolbar-title class="ml-2"> My Accounts</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-list dense class="secondaryBackground">
              <v-list-item disabled>
                <v-list-item-title>Create New Account</v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-title>Live Account</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Demo Account</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-divider></v-divider>
        <div class="mt-4 mx-2">
          <h3>Live Accounts</h3>
          <v-list-item dense class="px-0 my-2">
            <v-list-item-icon class="px-0 mr-2">
              <v-btn icon class="green">
                <v-icon>mdi-currency-usd</v-icon>
              </v-btn>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <v-chip label x-small color="black">6091858</v-chip>
                <v-chip label x-small color="brown">Platinum</v-chip>
                <v-chip label x-small color="green">live</v-chip>
              </v-list-item-title>
              <v-list-item-subtitle>
                <div class="d-flex justify-space-between">
                  <div>
                    Balance<br /><span class="grey--text">$124900</span>
                  </div>
                  <div>
                    Equity<br /><span class="grey--text">$1236788</span>
                  </div>
                  <div>P/L($)<br /><span class="grey--text">1000</span></div>
                </div>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>
                <v-list class="py-0" dense>
                  <v-list-item class="secondary" link to="/accounts/withdrawal">
                    <v-list-item-title>Withdrawal</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item class="secondary" link to="/accounts/deposit">
                    <v-list-item-title>Deposit</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item class="secondary">
                    <v-list-item-title>Transfer</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item class="secondary">
                    <v-list-item-title>Change Password</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item class="secondary">
                    <v-list-item-title>Show Password</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-action>
          </v-list-item>
          <v-list-item dense class="px-0 my-2">
            <v-list-item-icon class="px-0 mr-2">
              <v-btn icon class="green">
                <v-icon>mdi-currency-eur</v-icon>
              </v-btn>
            </v-list-item-icon>
            <v-list-item-content>
               <v-list-item-title>
                <v-chip label x-small color="black">6091858</v-chip>
                <v-chip label x-small color="brown">Platinum</v-chip>
                <v-chip label x-small color="green">live</v-chip>
              </v-list-item-title>
              <v-list-item-subtitle>
                <div class="d-flex justify-space-between">
                  <div>
                    Balance<br /><span class="grey--text">$124900</span>
                  </div>
                  <div>
                    Equity<br /><span class="grey--text">$1236788</span>
                  </div>
                  <div>P/L($)<br /><span class="grey--text">1000</span></div>
                </div>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>
                <v-list class="py-0" dense>
                  <v-list-item class="secondary" link to="/accounts/withdrawal">
                    <v-list-item-title>Withdrawal</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item class="secondary" link to="/accounts/deposit">
                    <v-list-item-title>Deposit</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item class="secondary">
                    <v-list-item-title>Transfer</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item class="secondary">
                    <v-list-item-title>Change Password</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item class="secondary">
                    <v-list-item-title>Show Password</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-action>
          </v-list-item>
        </div>
        <v-divider class="mt-7 mb-7"></v-divider>
        <div class="mt-4 mx-2">
          <h3>Demo Accounts</h3>
          <v-list-item dense class="px-0 my-2">
            <v-list-item-icon class="px-0 mr-2">
              <v-btn icon class="red">
                <v-icon>mdi-currency-usd</v-icon>
              </v-btn>
            </v-list-item-icon>
            <v-list-item-content>
               <v-list-item-title>
                <v-chip label x-small color="black">6091858</v-chip>
                <v-chip label x-small color="grey">silver</v-chip>
                <v-chip label x-small color="red">demo</v-chip>
              </v-list-item-title>
              <v-list-item-subtitle>
                <div class="d-flex justify-space-between">
                  <div>
                    Balance<br /><span class="grey--text">$124900</span>
                  </div>
                  <div>
                    Equity<br /><span class="grey--text">$1236788</span>
                  </div>
                  <div>P/L($)<br /><span class="grey--text">1000</span></div>
                </div>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>
                <v-list class="py-0" dense>
                  <v-list-item class="secondary">
                    <v-list-item-title>Change Password</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item class="secondary">
                    <v-list-item-title>Show Password</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-action>
          </v-list-item>
          <v-list-item dense class="px-0 my-2">
            <v-list-item-icon class="px-0 mr-2">
              <v-btn icon class="red">
                <v-icon>mdi-currency-usd</v-icon>
              </v-btn>
            </v-list-item-icon>
            <v-list-item-content>
               <v-list-item-title>
                <v-chip label x-small color="black">6091858</v-chip>
                <v-chip label x-small color="orange">gold</v-chip>
                <v-chip label x-small color="red">demo</v-chip>
              </v-list-item-title>
              <v-list-item-subtitle>
                <div class="d-flex justify-space-between">
                  <div>
                    Balance<br /><span class="grey--text">$124900</span>
                  </div>
                  <div>
                    Equity<br /><span class="grey--text">$1236788</span>
                  </div>
                  <div>P/L($)<br /><span class="grey--text">1000</span></div>
                </div>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>
                <v-list class="py-0" dense>
                  <v-list-item class="secondary">
                    <v-list-item-title>Change Password</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item class="secondary">
                    <v-list-item-title>Show Password</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-action>
          </v-list-item>
        </div>
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
      depsitDialog: false,
      withdrawalDialog: false,
    };
  },
};
</script>

<style></style>
