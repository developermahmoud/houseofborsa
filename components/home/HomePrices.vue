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
                  <span>MaryJames</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  <v-icon color="grey" small>mdi-map</v-icon> Abercorn
                  Court
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
                  <span>Patricia Robert</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  <v-icon color="grey" small>mdi-map</v-icon> Abercrombie Way
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
                  <span>Jennifer John</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  <v-icon color="grey" small>mdi-map</v-icon> Aldrich Avenue
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
                  <span>Michael William</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                   <v-icon color="grey" small>mdi-map</v-icon> Barrymoore Loop
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
                  <span>David Richard</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  <v-icon color="grey" small>mdi-map</v-icon> Allagash Avenue
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
                  <span>Joseph Thomas</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  <v-icon color="grey" small>mdi-map</v-icon> Anchorage Road
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
                  <span>Charles Christopher</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  <v-icon color="grey" small>mdi-map</v-icon> Armadillo Place
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
                  <span>Daniel Matthew</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  <v-icon color="grey" small>mdi-map</v-icon> Avecilla Drive
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
                  <span>Anthony Mark</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  <v-icon color="grey" small>mdi-map</v-icon> Ballesteros Drive
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
                  <v-icon color="grey" small>mdi-map</v-icon> Barraw Terrace
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
