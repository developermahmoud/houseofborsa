<template>
  <v-list dense class="py-0 transparent">
    <v-list-item class="info rounded-lg">
      <v-list-item-content>
        <v-list-item-title>0% funding fees</v-list-item-title>
        <v-list-item-subtitle
          >HOB does not charge funding fees</v-list-item-subtitle
        >
      </v-list-item-content>
      <v-list-item-icon>
        <v-icon>mdi-progress-question</v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-list-item class="mt-5">
      <v-list-item-icon>
        <v-icon>mdi-chevron-right</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Credit/Debit Card</v-list-item-title>
      <v-list-item-action-text>
        <div class="d-flex">
          <v-icon class="mr-1">fab fa-cc-visa</v-icon>
          <v-icon>fab fa-cc-mastercard</v-icon>
        </div>
      </v-list-item-action-text>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-chevron-right</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Bank Transfer</v-list-item-title>
      <v-list-item-action-text>
        <v-icon>mdi-bank</v-icon>
      </v-list-item-action-text>
    </v-list-item>
  </v-list>
</template>

<script>
export default {};
</script>

<style>
</style>