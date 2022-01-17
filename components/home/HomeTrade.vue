<template>
  <div>
    <v-row no-gutters>
      <v-col cols="6">
        <v-list-item class="secondary px-2 mr-2" link to="/accounts/live">
          <v-list-item-content>
            <v-list-item-title>Open</v-list-item-title>
            <v-list-item-subtitle class="caption"
              >Live Account</v-list-item-subtitle
            >
          </v-list-item-content>
          <v-list-item-avatar size="20">
            <v-img src="/p2p.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-col>
      <v-col cols="6">
        <v-list-item class="secondary px-2" link to="/accounts/demo">
          <v-list-item-content>
            <v-list-item-title>Open</v-list-item-title>
            <v-list-item-subtitle class="caption"
              >Demo Account</v-list-item-subtitle
            >
          </v-list-item-content>
          <v-list-item-avatar size="20">
            <v-img src="/credit.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-col>
      <v-col cols="12" class="mt-2">
        <v-list-item class="secondary rounded">
          <v-list-item-avatar tile width="50">
            <img src="/hobcard.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>HÓB Card</v-list-item-title>
            <v-list-item-subtitle
              >The HÓB prepaid card is linked to your trading
              account</v-list-item-subtitle
            >
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
