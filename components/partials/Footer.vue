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
      <v-btn class="secondaryBackground" link to="/">
        <span style="font-size:10px;">Home</span>
        <v-icon size="15">fa-home</v-icon>
      </v-btn>
      <v-btn class="secondaryBackground" link to="/portfolio">
        <span style="font-size:10px;">Portfolio</span>
        <v-icon size="15">fa-wallet</v-icon>
      </v-btn>
      <v-btn class="secondaryBackground" link to="/invest">
        <span style="font-size:10px;">Invest</span>
        <v-icon size="15">fa-chart-line</v-icon>
      </v-btn>
      <v-btn class="secondaryBackground" link to="/community">
        <span style="font-size:10px;">Community</span>
        <v-icon size="15">fa-users</v-icon>
      </v-btn>
      <v-btn class="secondaryBackground" link to="/user">
        <span style="font-size:10px;">User</span>
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
