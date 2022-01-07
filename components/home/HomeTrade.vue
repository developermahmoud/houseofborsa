<template>
  <div>
    <v-row no-gutters>
      <v-col cols="6">
        <v-card class="secondary mr-2" flat>
          <v-card-title class="title py-0">Open</v-card-title>
          <v-card-text>Live Account</v-card-text>
          <v-card-actions>
            <img style="width: 80px" class="rounded-lg" src="/p2p.png" />
            <v-spacer></v-spacer>
            <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="secondary" flat>
          <v-card-title class="title py-0">Open</v-card-title>
          <v-card-text> Demo Account</v-card-text>
          <v-card-actions>
            <img style="width: 70px" class="rounded-lg" src="/credit.jpg" />
            <v-spacer></v-spacer>
            <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" class="mt-2">
        <v-list-item class="secondary rounded">
          <v-list-item-avatar tile width="50">
            <img src="/hobcard.jpg"  />
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
