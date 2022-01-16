<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="ml-2">My Accounts</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-title
          >Live Accounts
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" color="green"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </template>
            <span>REQUEST ADDITIONAL ACCOUNT</span>
          </v-tooltip>
        </v-card-title>
        <v-card-text>
          <v-simple-table dense class="secondary">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Account</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Currency</th>
                  <th>Equity</th>
                  <th>Balance</th>
                  <th>Platform</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(account, index) in liveAccounts" :key="index">
                  <td>{{ account.account }}</td>
                  <td>
                    <div style="width: 235px">{{ account.name }}</div>
                  </td>
                  <td>{{ account.status }}</td>
                  <td>{{ account.currency }}</td>
                  <td>{{ account.equity }}</td>
                  <td>{{ account.balance }}</td>
                  <td>
                    <v-img :src="account.platform" width="30" />
                  </td>
                  <td>
                    <v-overflow-btn
                      dense
                      class="my-2"
                      :items="dropdown_icon"
                      label="Change Password "
                      segmented
                      outlined
                      hide-details
                      :target="`#dropdown-example-${index}`"
                    ></v-overflow-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-title
          >Demos Accounts
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" color="green"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </template>
            <span>NEW DEMO ACCOUNT</span>
          </v-tooltip>
        </v-card-title>
        <v-card-text>
          <v-simple-table dense class="secondary">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Account</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Currency</th>
                  <th>Equity</th>
                  <th>Balance</th>
                  <th>Platform</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(account, index) in demosAccounts" :key="index">
                  <td>{{ account.account }}</td>
                  <td>
                    <div style="width: 235px">{{ account.name }}</div>
                  </td>
                  <td>{{ account.status }}</td>
                  <td>{{ account.currency }}</td>
                  <td>{{ account.equity }}</td>
                  <td>{{ account.balance }}</td>
                  <td>
                    <v-img :src="account.platform" width="30" />
                  </td>
                  <td>
                    <v-btn outlined small>Change Password</v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-right">
            <v-pagination v-model="page" :length="6"></v-pagination>
          </div>
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
      page: 1,
      dropdown_icon: [
        { text: "Fund", callback: () => console.log("Fund") },
        { text: "Transfer", callback: () => console.log("Transfer") },
        { text: "Withdraw", callback: () => console.log("Withdraw") },
      ],
      demosAccounts: [
        {
          account: "508544",
          name: "Anas Alazem",
          status: "",
          currency: "USD",
          equity: "5,000.00",
          balance: "5,000.00",
          platform: "https://my.houseofborse.com/img/mt4-icon.png",
        },
        {
          account: "50001",
          name: "Anas Alazem",
          status: "",
          currency: "USD",
          equity: "5,000.00",
          balance: "5,000.00",
          platform: "https://my.houseofborse.com/img/mt5-icon.png",
        },
        {
          account: "50003",
          name: "House of Borse Testing Account EUR",
          status: "",
          currency: "USD",
          equity: "5,000.00",
          balance: "5,000.00",
          platform: "https://my.houseofborse.com/img/mt5-icon.png",
        },
        {
          account: "508544",
          name: "Anas Alazem",
          status: "",
          currency: "USD",
          equity: "5,000.00",
          balance: "5,000.00",
          platform: "https://my.houseofborse.com/img/mt4-icon.png",
        },
        {
          account: "50001",
          name: "Anas Alazem",
          status: "",
          currency: "USD",
          equity: "5,000.00",
          balance: "5,000.00",
          platform: "https://my.houseofborse.com/img/mt5-icon.png",
        },
        {
          account: "50003",
          name: "House of Borse Testing Account EUR",
          status: "",
          currency: "USD",
          equity: "5,000.00",
          balance: "5,000.00",
          platform: "https://my.houseofborse.com/img/mt5-icon.png",
        },
      ],
      liveAccounts: [
        {
          account: "50289",
          name: "HOB GBP Testing",
          status: "",
          currency: "GBP",
          equity: "8.10",
          balance: "8.10",
          platform: "https://my.houseofborse.com/img/mt4-icon.png",
        },
        {
          account: "50001",
          name: "House of Borse Test",
          status: "",
          currency: "USD",
          equity: "353.29",
          balance: "295.05",
          platform: "https://my.houseofborse.com/img/mt5-icon.png",
        },
        {
          account: "50003",
          name: "House of Borse Testing Account EUR",
          status: "",
          currency: "EUR",
          equity: "267.85",
          balance: "267.85",
          platform: "https://my.houseofborse.com/img/mt5-icon.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>