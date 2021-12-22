<template>
  <div>
    <v-bottom-navigation
      fixed
      grow
      :value="value"
      color="primary"
      class="secondaryBackground"
    >
      <v-btn>
        <span>Home</span>
        <v-icon>fa-home</v-icon>
      </v-btn>
       <v-btn>
        <span>Wallet</span>
        <v-icon>fa-wallet</v-icon>
      </v-btn>
      <v-btn>
        <span>Markets</span>
        <v-icon>fa-search-dollar</v-icon>
      </v-btn>
       <v-btn>
        <span>Community</span>
        <v-icon>fa-users</v-icon>
      </v-btn>
      <v-btn>
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
