<template>
  <div>
    <v-bottom-navigation
      fixed
      grow
      :value="value"
      height="55"
      color="primary"
      class="secondaryBackground"
    >
      <v-btn class="secondaryBackground">
        <span style="font-size:10px;">Home</span>
        <v-icon size="15">fa-home</v-icon>
      </v-btn>
      <v-btn class="secondaryBackground">
        <span style="font-size:10px;">Portfolio</span>
        <v-icon size="15">fa-wallet</v-icon>
      </v-btn>
      <v-btn class="secondaryBackground">
        <span style="font-size:10px;">Markets</span>
        <v-icon size="15">fa-search-dollar</v-icon>
      </v-btn>
      <v-btn class="secondaryBackground">
        <span style="font-size:10px;">Community</span>
        <v-icon size="15">fa-users</v-icon>
      </v-btn>
      <v-btn class="secondaryBackground">
        <span style="font-size:10px;">Profile</span>
        <v-icon size="15">fa-user</v-icon>
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
