<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-toolbar-title>Close Position</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="text-center">
          <v-responsive class="mt-10">
            <v-avatar size="100" color="green">
              <v-icon x-large>mdi-file-check-outline</v-icon>
            </v-avatar>
            <h2 class="my-5">Done</h2>
            <div class="grey--text">
              <strong class="red--text">SELL</strong> 50.00 / 50.00<br />
              Ripple at market<br />
              #89654788
            </div>
          </v-responsive>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
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