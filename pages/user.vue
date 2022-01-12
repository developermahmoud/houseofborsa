<template>
  <div>
    <v-list-item two-line class="px-0">
      <v-list-item-avatar size="60">
        <v-img src="/avatar.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title
          >Mahmoud, 24&nbsp;<v-icon small color="blue"
            >mdi-check-decagram</v-icon
          ></v-list-item-title
        >
        <v-list-item-subtitle>Fullstack Web Developer</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <div class="mb-3">
      <v-chip label outlined small>35 Friend</v-chip>
      <v-chip label outlined small>35 Follower</v-chip>
      <v-chip label outlined small>35 Post</v-chip>
      <v-chip label outlined small>3 Account</v-chip>
    </div>
    <div class="d-flex align-center justify-space-between mb-3">
      <v-btn icon class="secondary">
        <v-icon>mdi-cellphone</v-icon>
      </v-btn>
      <v-btn icon class="secondary">
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
      <v-btn icon class="secondary">
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn icon class="secondary">
        <v-icon>mdi-chat</v-icon>
      </v-btn>
    </div>
    <v-img src="/hobcard.jpg" class="rounded-xl mb-3" />
    <v-row>
      <v-col cols="6" class="text-center">
        <v-card
          flat
          class="secondaryBackground pa-2 rounded-lg"
          link
          to="/accounts/deposit"
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
          link
          to="/accounts/deposit"
        >
           <v-icon color="primary">fas fa-user-clock</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text">My Accounts</span>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-card flat class="secondaryBackground pa-2 rounded-lg">
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
        <v-card flat class="secondaryBackground pa-2 rounded-lg">
          <v-icon color="primary">fas fa-exchange-alt</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text"
            >Internal Transfer</span
          >
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card flat class="secondaryBackground text-center pa-2 rounded-lg">
          <v-icon color="primary">fas fa-history</v-icon>
          <br />
          <span style="font-size: 14px" class="white--text">
            Account hostry
          </span>
        </v-card>
      </v-col>
    </v-row>

    <v-list class="transparent">
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Settings</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-information-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ABOUT HOB</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>fa-question-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Support and chat</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-brightness-4</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Dark Mode</v-list-item-title>
        <v-list-item-action class="pr-4">
          <v-switch class="mr-2"></v-switch>
        </v-list-item-action>
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
  </div>
</template>

<script>
export default {};
</script>

<style></style>