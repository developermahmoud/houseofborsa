<template>
  <div>
    <h3 class="mb-3">Request Additional Account</h3>
    <v-form>
      <v-select dense outlined label="Account Currency*"></v-select>
      <v-select dense outlined label="Select Platform*"></v-select>
      <v-select dense outlined label="Leverage*"></v-select>
      <v-text-field
        dense
        outlined
        label="Estimated Initial Deposit*"
      ></v-text-field>
      <v-textarea
        dense
        outlined
        label="Reason For Additional Account*"
      ></v-textarea>
      <v-text-field dense outlined label="Member Area Password*"></v-text-field>
      <div class="d-flex align-center">
        <v-checkbox label="I have read and agree to"> </v-checkbox>
        <nuxt-link target="_blank" to="/" v-on="on">
          Terms of Business
        </nuxt-link>
      </div>
      <p>
        I hereby confirm that the information provided above is true and
        correct. House Of Borse reserves the right, but has no duty, to verify
        the accuracy of information provided, and to contact the account holder,
        bankers, brokers, and others, as it deems necessary. Falsified
        information may result in legal action and is punishable by law.
      </p>
      <v-btn text small class="red">Cancel</v-btn>
      <v-btn text small class="primary">Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>