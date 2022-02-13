<template>
  <div>
    <v-toolbar flat class="primary">
      <v-icon>mdi-arrow-left</v-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>HÓB Contests</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-information-outline</v-icon>
    </v-toolbar>
    <div :class="`pa-2 primary rounded-xl rounded-t-0`">
      <div class="text-center">02-2-2022</div>
      <div class="d-flex justify-space-between mt-4">
        <div class="mt-5">
          <v-badge avatar overlap>
            <template v-slot:badge>
              <v-icon>fa-trophy</v-icon>
            </template>
            <v-avatar size="40">
              <v-img src="/avatar.jpg"></v-img>
            </v-avatar>
          </v-badge>
          <div class="caption">carter</div>
          <div style="font-size: 11px" class="font-weight-bold">
            Performance 93%
          </div>
          <h3 class="green--text">+$15</h3>
        </div>
        <div>
          <v-badge avatar overlap>
            <template v-slot:badge>
              <v-icon>fa-trophy</v-icon>
            </template>
            <v-avatar size="40">
              <v-img src="/avatar.jpg"></v-img>
            </v-avatar>
          </v-badge>
          <div class="caption">berton</div>
          <div style="font-size: 11px" class="font-weight-bold">
            Performance 130%
          </div>
          <h3 class="green--text">+$20</h3>
        </div>
        <div class="mt-5">
          <v-badge avatar overlap>
            <template v-slot:badge>
              <v-icon>fa-trophy</v-icon>
            </template>
            <v-avatar size="40">
              <v-img src="/avatar.jpg"></v-img>
            </v-avatar>
          </v-badge>
          <div class="caption">faraz</div>
          <div style="font-size: 11px" class="font-weight-bold">
            Performance 77%
          </div>
          <h3 class="green--text">+$12</h3>
        </div>
      </div>
    </div>
    <v-simple-table class="mx-2 mt-5 secondary">
      <template v-slot:default>
        <thead>
          <tr>
            <th></th>
            <th>User</th>
            <th>Country</th>
            <th>Performance</th>
            <th>Reward</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i">
            <td>{{ i }}</td>
            <td>
              <div style="width: 150px">
                <v-avatar size="30" class="mr-2">
                  <v-img src="/avatar.jpg"></v-img>
                </v-avatar>
                Mahmoud
              </div>
            </td>
            <td>
              <div style="width: 60px"><v-icon color="cyan">mdi-flag</v-icon> KSA
              </div></td>
            <td>77%</td>
            <td class="green--text">$6Credit</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  layout: "internal",
};
</script>

<style>
</style>