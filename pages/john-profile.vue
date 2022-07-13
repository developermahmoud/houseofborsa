<template>
  <div>
    <v-list-item three-line class="px-0">
      <v-list-item-action class="mr-4">
        <div class="avatarDiv">
          <v-badge overlap bottom offset-y="25" color="cyan" left>
            <template v-slot:badge>
              <v-icon class="cyan">mdi-check-decagram</v-icon>
            </template>
            <v-avatar size="55">
              <v-img src="/avatar.jpg"></v-img>
            </v-avatar>
          </v-badge>
          <v-icon small color="black" class="iconAbsolute">mdi-camera</v-icon>
        </div>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title
          ><v-icon small color="green">mdi-circle</v-icon> Mahmoud,
          24</v-list-item-title
        >
        <v-list-item-subtitle>
          <v-chip x-small label color="primary"
            >Platinum</v-chip
          ></v-list-item-subtitle
        >
        <v-list-item-subtitle
          ><v-icon small>mdi-map-marker</v-icon> United Kingdom,
          London</v-list-item-subtitle
        >
        <v-list-item-subtitle
          ><span style="font-size: 12px">Followers equity</span>
          <span style="font-size: 12px" class="green--text"
            >215.252$</span
          ></v-list-item-subtitle
        >
      </v-list-item-content>
      <v-list-item-action-text>
        <v-icon>mdi-account-plus</v-icon>
      </v-list-item-action-text>
    </v-list-item>
    <div class="d-flex align-center justify-space-between mb-3">
      <div
        class="text-center body-2"
        style="cursor: pointer"
        @click="showIdeas = !showIdeas"
      >
        <v-icon color="primary" small>mdi-head-lightbulb</v-icon>
        <span>120</span>
        <br />
        <span style="font-size: 12px" class="grey--text">IDEAS</span>
      </div>
      <div @click="showIdeas=false" class="text-center body-2" style="cursor: pointer">
        <v-icon color="primary" small>mdi-chart-bar-stacked</v-icon>
        <span>215</span>
        <br />
        <span style="font-size: 12px" class="grey--text">PORTFOLIO</span>
      </div>

      <div
        style="cursor: pointer"
        class="text-center body-2"
        @click="followingDialog = true"
      >
        <v-icon color="primary" small>mdi-account-arrow-right</v-icon>
        <span>20k</span>
        <br />
        <span style="font-size: 12px" class="grey--text">VISITORS</span>
      </div>

      <div
        style="cursor: pointer"
        class="text-center body-2"
        @click="followingDialog = true"
      >
        <v-icon color="primary" small>mdi-account-arrow-left</v-icon>
        <span>100</span>
        <br />
        <span style="font-size: 12px" class="grey--text">FOLLOWERS</span>
      </div>
    </div>
    <template v-if="showIdeas">
      <user-idias />
    </template>
    <template v-else>
      <UserSummaryChart v-if="showSummary" />
    </template>
    <user-dialog-following
      v-if="followingDialog"
      :dialog="followingDialog"
      @close-dialog="followingDialog = false"
    />
    <user-dialogs-trading-platform
      v-if="platformDialog"
      :dialog="platformDialog"
      @close-dialog="platformDialog = false"
    />
    <user-dialogs-referr-friend
      v-if="referrDialog"
      :dialog="referrDialog"
      @close-dialog="referrDialog = false"
    />
  </div>
</template>

<script>
import UserDialogFollowing from "../components/user/dialogs/UserDialogFollowing.vue";
import UserDialogsAccountHistory from "../components/user/dialogs/UserDialogsAccountHistory.vue";
import UserDialogsHOBCard from "../components/user/dialogs/UserDialogsHOBCard.vue";
import UserDialogsMyAccount from "../components/user/dialogs/UserDialogsMyAccount.vue";
import UserDialogsMyProfile from "../components/user/dialogs/UserDialogsMyProfile.vue";
import UserDialogsReferrFriend from "../components/user/dialogs/UserDialogsReferrFriend.vue";
import UserDialogsTradingPlatform from "../components/user/dialogs/UserDialogsTradingPlatform.vue";
import UserIdias from "../components/user/dialogs/UserIdias.vue";
import UserSummaryChart from "../components/user/UserSummaryChart";
export default {
  components: {
    UserSummaryChart,
    UserDialogsMyAccount,
    UserDialogsAccountHistory,
    UserDialogsMyProfile,
    UserDialogsHOBCard,
    UserDialogFollowing,
    UserIdias,
    UserDialogsTradingPlatform,
    UserDialogsReferrFriend,
  },
  data() {
    return {
      showSummary: true,
      referrDialog: false,
      platformDialog: false,
      marketDataSubscribeDialog: false,
      showIdeas: false,
      followingDialog: false,
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
