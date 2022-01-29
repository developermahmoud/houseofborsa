<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay  transition="dialog-top-transition">
    <v-card class="secondary">
      <v-tabs
        fixed-tabs
        right
        active-class="primary"
        background-color="secondary"
        class="mb-5"
      >
        <v-tab
          >Trading<br />
          history</v-tab
        >
        <v-tab
          >Transfer<br />
          history</v-tab
        >
      </v-tabs>
      <v-card-text>
        <v-row no-gutters>
          <v-col cols="12" class="mb-2">
            <v-select
              v-model="selectedItem"
              :items="[0, 1]"
              dense
              class="pt-2"
              label="Account *"
              hide-details
              outlined
            >
              <template v-slot:selection="{}"> HOB 125.22 </template>
            </v-select>
          </v-col>
          <v-col cols="12" class="mb-2">
            <v-slide-group
              v-model="toggle_btn"
              mandatory
              active-class="primary"
              :show-arrows="false"
            >
              <v-slide-item v-slot="{ active, toggle }">
                <v-btn
                  small
                  class="secondaryBackground mr-1"
                  :input-value="active"
                  @click="toggle"
                >
                  1d
                </v-btn>
              </v-slide-item>
              <v-slide-item v-slot="{ active, toggle }">
                <v-btn
                  small
                  class="secondaryBackground mr-1"
                  :input-value="active"
                  @click="toggle"
                >
                  1m
                </v-btn>
              </v-slide-item>
              <v-slide-item v-slot="{ active, toggle }">
                <v-btn
                  small
                  class="secondaryBackground mr-1"
                  :input-value="active"
                  @click="toggle"
                >
                  3m
                </v-btn>
              </v-slide-item>
              <v-slide-item v-slot="{ active, toggle }">
                <v-btn
                  small
                  class="secondaryBackground mr-1"
                  :input-value="active"
                  @click="toggle"
                >
                  6m
                </v-btn>
              </v-slide-item>
              <v-slide-item v-slot="{ active, toggle }">
                <v-btn
                  small
                  class="secondaryBackground mr-1"
                  :input-value="active"
                  @click="toggle"
                >
                  1y
                </v-btn>
              </v-slide-item>
              <v-slide-item v-slot="{ active, toggle }">
                <v-btn
                  small
                  class="secondaryBackground mr-1"
                  :input-value="active"
                  @click="toggle"
                >
                  3y
                </v-btn>
              </v-slide-item>
              <v-slide-item v-slot="{ active, toggle }">
                <v-btn
                  small
                  class="secondaryBackground mr-1"
                  :input-value="active"
                  @click="toggle"
                >
                  All time
                </v-btn>
              </v-slide-item>
            </v-slide-group>
          </v-col>
          <v-col cols="12" class="mb-2">
            <v-text-field
              dense
              hide-details
              placeholder="From"
              outlined
              append-icon="mdi-calendar"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              hide-details
              dense
              placeholder="To"
              outlined
              append-icon="mdi-calendar"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn block class="background" @click="$emit('close-dialog')" text
          ><v-icon>mdi-filter</v-icon></v-btn
        >
      </v-card-actions>
    </v-card>
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
  data() {
    return {
      selectedItem: 0,
      toggle_btn: undefined,
    };
  },
};
</script>

<style>
</style>