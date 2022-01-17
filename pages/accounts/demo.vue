<template>
  <div>
    <h3 class="mb-3">Add Additional Demo Account</h3>
    <v-form>
      <v-select dense outlined label="Leverage*"></v-select>
      <v-select dense outlined label="Select Platform*"></v-select>
      <v-select dense outlined label="Deposit Amount*"></v-select>
      <v-text-field dense outlined label="Member Area Password*"></v-text-field>
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