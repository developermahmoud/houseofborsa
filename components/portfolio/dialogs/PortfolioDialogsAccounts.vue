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
              <v-list-item-title>HÓB - USD</v-list-item-title>
              <v-list-item-subtitle class="green--text"
                >0.00$</v-list-item-subtitle
              >
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
                </v-list>
              </v-menu>
            </v-list-item-action>
          </v-list-item>
          <v-chip small label color="secondaryBackground">6091858</v-chip>
          <v-chip small label color="grey">Silver</v-chip>
          <v-chip small label color="green">LIVE</v-chip>
        </div>
        <v-divider class="mt-5"></v-divider>
        <div class="mt-4 mx-2">
          <h3>Demo Accounts</h3>
          <v-list-item dense class="px-0 my-2">
            <v-list-item-icon class="px-0 mr-2">
              <v-btn icon class="red">
                <v-icon>mdi-currency-usd</v-icon>
              </v-btn>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>HÓB - USD</v-list-item-title>
              <v-list-item-subtitle class="green--text"
                >10.000.00$</v-list-item-subtitle
              >
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
                </v-list>
              </v-menu>
            </v-list-item-action>
          </v-list-item>
          <v-chip small label color="secondaryBackground">6091858</v-chip>
          <v-chip small label color="primary">Gold</v-chip>
          <v-chip small label color="red">DEMO</v-chip>
        </div>
        <div class="mt-4 mx-2">
          <h3>Demo Accounts</h3>
          <v-list-item dense class="px-0 my-2">
            <v-list-item-icon class="px-0 mr-2">
              <v-btn icon class="red">
                <v-icon>mdi-currency-usd</v-icon>
              </v-btn>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>HÓB - USD</v-list-item-title>
              <v-list-item-subtitle class="green--text"
                >10.000.00$</v-list-item-subtitle
              >
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
                </v-list>
              </v-menu>
            </v-list-item-action>
          </v-list-item>
          <v-chip small label color="secondaryBackground">6091858</v-chip>
          <v-chip small label color="brown">Platinum</v-chip>
          <v-chip small label color="red">DEMO</v-chip>
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

<style>
</style>