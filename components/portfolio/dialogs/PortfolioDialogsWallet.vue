<template>
   <v-dialog v-model="dialog" max-width="700" scrollable @click:outside="$emit('close-dialog')">
      <v-row no-gutters>
        <v-col cols="4">
          <v-card tile class="secondary py-2 text-center" outlined  link to="/accounts/deposit"> 
            <v-icon color="primary">mdi-arrow-up-thin</v-icon>
            <br />
            Deposit
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card tile class="secondary py-2 text-center" outlined>
            <v-icon color="primary">mdi-swap-horizontal</v-icon>
            <br />
            Transfer
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card tile class="secondary py-2 text-center" outlined  link to="/accounts/withdrawal">
            <v-icon color="primary">mdi-arrow-down-thin</v-icon>
            <br />
            Withdraw
          </v-card>
        </v-col>
      </v-row>
    </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      required: true,
      type: Boolean,
    },
  },
};
</script>

<style>

</style>