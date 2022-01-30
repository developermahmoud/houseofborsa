<template>
  <div>
    <v-dialog
      v-model="dialog"
      max-width="700"
      scrollable
      @click:outside="$emit('close-dialog')"
    >
      <v-card class="secondary">
        <v-card-text>
          <v-img class="ma-5" src="/mt5-logo.png"></v-img>
          <p>
            Next generation of popular trading platform MT4. In addition to all
            advantages of the previous vesrion, MT5 features direct access to
            stock exchanges
          </p>
          <v-simple-table class="secondary">
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>User ID</td>
                  <td>644455</td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>******</td>
                </tr>
                <tr>
                  <td>Server</td>
                  <td>HOB-mt5</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-actions class="mr-2">
          <v-spacer></v-spacer>
          <v-btn small outlined text>Download MT5</v-btn>
        </v-card-actions>
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