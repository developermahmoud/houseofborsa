<template>
  <div>
    <div class="d-flex">
      <v-card width="50%" class="secondary mr-2" flat>
        <v-card-title class="body-1 font-weight-bold">P2P Trading</v-card-title>
        <v-card-text style="height: 60px">
          Bank Transfer, PayPal, Revolut and more
        </v-card-text>
        <v-card-actions>
          <img style="width: 100px" class="rounded-lg" src="/p2p.png" />
          <v-spacer></v-spacer>
          <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
        </v-card-actions>
      </v-card>
      <v-card width="50%" class="secondary" flat>
        <v-card-title class="body-1 font-weight-bold"
          >Credit/Debit card</v-card-title
        >
        <v-card-text style="height: 60px"> Visa, Mastercard </v-card-text>
        <v-card-actions>
          <img style="width: 90px" class="rounded-lg" src="/credit.jpg" />
          <v-spacer></v-spacer>
          <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>