<template>
  <div>
    <v-bottom-navigation
      fixed
      grow
      :value="value"
      height="58"
      color="primary"
      class="secondaryBackground"
    >
      <v-btn class="secondaryBackground" link to="/">
        <span style="font-size:12px;line-height: 2.0;">Home</span>
        <img style="width:25px;" src="/Terminal.ico" />
      </v-btn>
      <v-btn class="secondaryBackground" link to="/portfolio">
        <span style="font-size:12px;line-height: 2.0;">Portfolio</span>
        <v-icon size="25">mdi-chart-pie</v-icon>
      </v-btn>
      <v-btn class="secondaryBackground" link to="/invest">
        <span style="font-size:12px;line-height: 2.0;">Invest</span>
        <v-icon size="25">fa-chart-line</v-icon>
      </v-btn>
      <v-btn class="secondaryBackground" link to="/community">
        <span style="font-size:12px;line-height: 2.0;">Community</span>
        <v-icon size="25">fa-users</v-icon>
      </v-btn>
      <v-btn class="secondaryBackground" link to="/user">
        <span style="font-size:12px;line-height: 2.0;">User</span>
        <v-icon size="25">fa-user</v-icon>
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
