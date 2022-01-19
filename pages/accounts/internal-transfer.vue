<template>
  <div>
    <v-card class="secondary">
      <v-card-text>
        <div class="primary--text">Please submit below the information.</div>
        <v-form class="mt-2">
          <v-select
            outlined
            dense
            hide-details
            class="mb-2"
            label="HOB Account From*"
          ></v-select>
          <v-text-field
            outlined
            dense
            hide-details
            class="mb-2"
            label="Amount*"
          ></v-text-field>
          <v-select
            outlined
            dense
            hide-details
            class="mb-2"
            label="HOB Account To*"
          ></v-select>
          <v-btn block outlined text>Submit</v-btn>
        </v-form>
        <v-alert class="info mt-5">
          House of Borse under no circumstance will not accept funds transfer
          from or to a 3rd Party Account. In all instances funds must only come
          from a bank account/credit card in the name of account holder (only).
          Where funds are withdrawn from a trading account, it is the
          responsibility of the account holder to ensure that there are
          sufficient funds remaining to cover for the margin requirement of all
          open/running positions in that account. Please note that the following
          (bank) fee charges will be applicable to payments via card .
          Furthermore, please note that funding will take 3-5 working days)
          These credit card charges are only applicable to fund deposits.
        </v-alert>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>