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
        <div class="mt-10">
          <v-badge avatar overlap>
            <template v-slot:badge>
              <v-icon>fa-trophy</v-icon>
            </template>
            <v-avatar size="40">
              <v-img src="/avatar.jpg"></v-img>
            </v-avatar>
          </v-badge>
          <div class="caption"><v-icon small color="cyan">mdi-flag</v-icon>  carter</div>
          <h3 class="green--text">
            <v-icon small color="green">mdi-arrow-up</v-icon>10.51%
          </h3>
          <div style="font-size: 11px" class="grey--text font-weight-bold">
            RETURN
          </div>
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
          <div class="caption"><v-icon small color="cyan">mdi-flag</v-icon>  berton</div>
         <h3 class="green--text">
            <v-icon small color="green">mdi-arrow-up</v-icon>10.51%
          </h3>
          <div style="font-size: 11px" class="grey--text font-weight-bold">
            RETURN
          </div>
        </div>
        <div class="mt-10">
          <v-badge avatar overlap>
            <template v-slot:badge>
              <v-icon>fa-trophy</v-icon>
            </template>
            <v-avatar size="40">
              <v-img src="/avatar.jpg"></v-img>
            </v-avatar>
          </v-badge>
          <div class="caption"><v-icon small color="cyan">mdi-flag</v-icon> faraz</div>
          <h3 class="green--text">
            <v-icon small color="green">mdi-arrow-up</v-icon>10.51%
          </h3>
          <div style="font-size: 11px" class="grey--text font-weight-bold">
            RETURN
          </div>
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
            <th>Drawdown%</th>
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
              <div style="width: 60px">
                <v-icon color="cyan">mdi-flag</v-icon> KSA
              </div>
            </td>
            <td class="green--text"> 77%</td>
            <td class="red--text">10%</td>
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