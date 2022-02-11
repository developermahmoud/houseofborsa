<template>
  <div>
    <div class="mb-3 d-flex justify-space-between align-center">
      <h4 class="text-truncate">Contests Rating</h4>
      <nuxt-link to="/" class="text-decoration-none" style="font-size: 12px"
        >Show All</nuxt-link
      >
    </div>
    <v-card class="secondary" flat tile>
      <v-simple-table class="secondary">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Name</th>
              <th>Weeks</th>
              <th>Drawdown%</th>
              <th>Growth%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex">
                  <v-avatar size="20" class="mr-2">
                    <img src="/avatar.jpg" />
                  </v-avatar>
                  <span>Ahmed Ali</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td>
                <v-chip label small style="width: 57px" class="red"
                  >0.5%</v-chip
                >
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <v-avatar size="20" class="mr-2">
                    <img src="/avatar.jpg" />
                  </v-avatar>
                  <span>Ahmed Ali</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Gold vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="green">10.5%</v-chip></td>
            </tr>
            <tr>
              <td>
               <div class="d-flex">
                  <v-avatar size="20" class="mr-2">
                    <img src="/avatar.jpg" />
                  </v-avatar>
                  <span>Ahmed Ali</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Solana Token vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td>
                <v-chip label small style="width: 57px" class="red"
                  >0.5%</v-chip
                >
              </td>
            </tr>
            <tr>
              <td>
               <div class="d-flex">
                  <v-avatar size="20" class="mr-2">
                    <img src="/avatar.jpg" />
                  </v-avatar>
                  <span>Ahmed Ali</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Apple inc.
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="green">10.5%</v-chip></td>
            </tr>
            <tr>
              <td>
               <div class="d-flex">
                  <v-avatar size="20" class="mr-2">
                    <img src="/avatar.jpg" />
                  </v-avatar>
                  <span>Ahmed Ali</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Euro vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td>
                <v-chip label small style="width: 57px" class="red"
                  >0.5%</v-chip
                >
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <v-avatar size="20" class="mr-2">
                    <img src="/avatar.jpg" />
                  </v-avatar>
                  <span>Ahmed Ali</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Ethereum vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="green">10.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <v-avatar size="20" class="mr-2">
                    <img src="/avatar.jpg" />
                  </v-avatar>
                  <span>Ahmed Ali</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td>
                <v-chip label small style="width: 57px" class="red"
                  >0.5%</v-chip
                >
              </td>
            </tr>
            <tr>
              <td>
               <div class="d-flex">
                  <v-avatar size="20" class="mr-2">
                    <img src="/avatar.jpg" />
                  </v-avatar>
                  <span>Ahmed Ali</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="green">10.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <v-avatar size="20" class="mr-2">
                    <img src="/avatar.jpg" />
                  </v-avatar>
                  <span>Ahmed Ali</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="red">0.5%</v-chip></td>
            </tr>
            <tr>
              <td>
               <div class="d-flex">
                  <v-avatar size="20" class="mr-2">
                    <img src="/avatar.jpg" />
                  </v-avatar>
                  <span>Ahmed Ali</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="green">10.5%</v-chip></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle_exclusive: null,
    };
  },
};
</script>

<style></style>
