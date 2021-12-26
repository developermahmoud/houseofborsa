<template>
  <div>
    <v-bottom-navigation
      fixed
      grow
      :value="value"
      height="70"
      color="primary"
      class="secondaryBackground"
    >
      <v-btn height="70" class="secondaryBackground">
        <span>Home</span>
        <v-icon>fa-home</v-icon>
      </v-btn>
      <v-btn height="70" class="secondaryBackground">
        <span>Wallet</span>
        <v-icon>fa-wallet</v-icon>
      </v-btn>
      <v-btn height="70" class="secondaryBackground">
        <span>Markets</span>
        <v-icon>fa-search-dollar</v-icon>
      </v-btn>
      <v-btn height="70" class="secondaryBackground">
        <span>Community</span>
        <v-icon>fa-users</v-icon>
      </v-btn>
      <v-btn height="70" class="secondaryBackground">
        <span>Support</span>
        <v-icon>fa-question-circle</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data: () => ({ value: 0 }),
};
</script>

<style></style>
