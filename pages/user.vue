<template>
  <div>
    <v-list-item two-line class="px-0">
      <v-list-item-action class="mr-4">
        <div class="avatarDiv">
          <img src="/avatar.jpg" class="avatarClassImg" />
          <v-badge dot color="green" offset-y="-30"></v-badge>
          <v-icon small color="black" class="iconAbsolute">mdi-camera</v-icon>
        </div>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Mahmoud, 24</v-list-item-title>
        <v-list-item-subtitle>Fullstack Web Developer</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-progress-circular
          :rotate="360"
          :size="50"
          :width="4"
          :value="80"
          color="primary"
        >
          80%
        </v-progress-circular>
      </v-list-item-action>
    </v-list-item>
    <div class="d-flex align-center justify-space-between mb-3">
      <div class="text-center body-2">
        <span>422</span> <v-icon color="primary" small>mdi-chart-box</v-icon>
        <br />
        <span style="font-size:12px;" class="grey--text">REPUTATION</span>
      </div>
      <div class="text-center body-2">
        <span>120</span>
        <v-icon color="primary" small>mdi-head-lightbulb</v-icon>
        <br />
        <span style="font-size:12px;" class="grey--text">IDEAS</span>
      </div>
      <div class="text-center body-2">
        <span>50</span> <v-icon color="primary" small>mdi-thumb-up</v-icon>
        <br />
        <span style="font-size:12px;" class="grey--text">LIKES</span>
      </div>
      <div class="text-center body-2">
        <span>100</span>
        <v-icon color="primary" small>mdi-account-group</v-icon>
        <br />
        <span style="font-size:12px;" class="grey--text">FOLLOWERS</span>
      </div>
    </div>
    <v-img src="/HOB-credit-card final png2.png" class="mb-3" />
    <v-row>
      <v-col cols="6" class="text-center">
        <v-card
          flat
          class="secondaryBackground pa-2 rounded-lg"
          @click="myProfileDialog = true"
        >
          <v-icon color="primary">fas fa-user</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text">My Profile</span>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-card
          flat
          class="secondaryBackground pa-2 rounded-lg"
          @click="myAccountsDialog = true"
        >
          <v-icon color="primary">fas fa-user-clock</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text">My Accounts</span>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-card
          flat
          class="secondaryBackground pa-2 rounded-lg"
          @click="hobCardDialog = true"
        >
          <v-icon color="primary">far fa-credit-card</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text">My HÖB Card</span>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-card
          flat
          class="secondaryBackground pa-2 rounded-lg"
          link
          to="/accounts/deposit"
        >
          <v-icon color="primary">fas fa-arrow-down</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text">Deposit</span>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-card
          flat
          class="secondaryBackground pa-2 rounded-lg"
          link
          to="/accounts/withdrawal"
        >
          <v-icon color="primary">fas fa-arrow-up</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text">Withdrawal</span>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-card
          flat
          class="secondaryBackground pa-2 rounded-lg"
          link
          to="/accounts/internal-transfer"
        >
          <v-icon color="primary">fas fa-exchange-alt</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text"
            >Internal Transfer</span
          >
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card
          flat
          @click="myAccountsHistoryDialog = true"
          class="secondaryBackground text-center pa-2 rounded-lg"
        >
          <v-icon color="primary">fas fa-history</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text">
            Account hostry
          </span>
        </v-card>
      </v-col>
    </v-row>
    <v-list class="transparent">
      <v-list-item to="/accounts/setting">
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Settings</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item to="/accounts/setting">
        <v-list-item-icon>
          <v-icon>mdi-account-arrow-right-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Refer a friend</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-at</v-icon>
        </v-list-item-icon>
        <v-list-item-title>We're on social media</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link to="/support">
        <v-list-item-icon>
          <v-icon>mdi-information-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ABOUT HOB</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link to="/support">
        <v-list-item-icon>
          <v-icon>fa-headset</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Live Support</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link to="/support">
        <v-list-item-icon>
          <v-icon>fa-gavel</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Legal Information</v-list-item-title>
          <v-list-item-subtitle
            >HÓB documents and third-party licenses</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Sign out</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
    <user-dialogs-my-account
      v-if="myAccountsDialog"
      :dialog="myAccountsDialog"
      @close-dialog="myAccountsDialog = false"
    />
    <user-dialogs-account-history
      v-if="myAccountsHistoryDialog"
      :dialog="myAccountsHistoryDialog"
      @close-dialog="myAccountsHistoryDialog = false"
    />
    <user-dialogs-my-profile
      v-if="myProfileDialog"
      :dialog="myProfileDialog"
      @close-dialog="myProfileDialog = false"
    />
    <user-dialogs-h-o-b-card
      v-if="hobCardDialog"
      :dialog="hobCardDialog"
      @close-dialog="hobCardDialog = false"
    />
  </div>
</template>

<script>
import UserDialogsAccountHistory from "../components/user/dialogs/UserDialogsAccountHistory.vue";
import UserDialogsHOBCard from "../components/user/dialogs/UserDialogsHOBCard.vue";
import UserDialogsMyAccount from "../components/user/dialogs/UserDialogsMyAccount.vue";
import UserDialogsMyProfile from "../components/user/dialogs/UserDialogsMyProfile.vue";
export default {
  components: {
    UserDialogsMyAccount,
    UserDialogsAccountHistory,
    UserDialogsMyProfile,
    UserDialogsHOBCard,
  },
  data() {
    return {
      myAccountsDialog: false,
      myAccountsHistoryDialog: false,
      internalTransferDialog: false,
      myProfileDialog: false,
      hobCardDialog: false,
    };
  },
};
</script>

<style scoped>
.avatarDiv {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border-style: solid;
  border-color: #ffffff;
  position: relative;
}

.avatarClassImg {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

.iconAbsolute {
  position: absolute;
  cursor: pointer;
  top: 30px;
  right: -10px;
  /* border: 1px solid; */
  border-radius: 50%;
  /* padding: 11px; */
  height: 20px;
  width: 20px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  background-color: #e4e6eb;
}
</style>