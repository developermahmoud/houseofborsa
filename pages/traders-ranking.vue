<template>
  <div>
    <h4 class="mb-3">Traders Ranking | Top</h4>
    <v-slide-group class="mb-5" :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card tile class="secondary mr-2" width="230" falt outlined>
          <v-list-item>
            <v-list-item-action class="mr-4">
              <v-badge overlap bottom offset-y="19" color="transparent" right>
                <template v-slot:badge>
                  <v-icon size="30" color="amber">mdi-star</v-icon>
                </template>
                <v-avatar tile size="40">
                  <v-img src="/avatar.jpg"></v-img>
                </v-avatar>
              </v-badge>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Jean-marclenfa</v-list-item-title>
              <v-list-item-subtitle
                ><v-icon small>mdi-flag</v-icon> USA</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex justify-space-between align-center">
              <div>
                <div>
                  <v-icon small color="green">mdi-arrow-up</v-icon
                  ><strong class="green--text title">5.71%</strong>
                </div>
                <div>RETURN</div>
                <div>(LAST 12M)</div>
              </div>
              <div class="text-center">
                <v-icon>mdi-account-arrow-left-outline</v-icon>
                <div class="text-center">1,1005</div>
              </div>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex justify-space-between">
              <div>
                <div class="text--grey">Followers equity</div>
                <div class="green--text">215.252%</div>
              </div>
              <v-btn class="background"><v-icon>mdi-plus</v-icon></v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <v-slide-group class="mb-5" :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card tile class="secondary mr-2" width="230" falt outlined>
          <v-list-item>
            <v-list-item-action class="mr-4">
              <v-badge overlap bottom offset-y="19" color="transparent" right>
                <template v-slot:badge>
                  <v-icon size="30" color="amber">mdi-star</v-icon>
                </template>
                <v-avatar tile size="40">
                  <v-img src="/avatar.jpg"></v-img>
                </v-avatar>
              </v-badge>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Jean-marclenfa</v-list-item-title>
              <v-list-item-subtitle
                ><v-icon small>mdi-flag</v-icon> USA</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex justify-space-between align-center">
              <div>
                <div>
                  <v-icon small color="green">mdi-arrow-up</v-icon
                  ><strong class="green--text title">5.71%</strong>
                </div>
                <div>RETURN</div>
                <div>(LAST 12M)</div>
              </div>
              <div class="text-center">
                <v-icon>mdi-account-arrow-left-outline</v-icon>
                <div class="text-center">1,1005</div>
              </div>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex justify-space-between">
              <div>
                <div class="text--grey">Followers equity</div>
                <div class="green--text">215.252%</div>
              </div>
              <v-btn class="background"><v-icon>mdi-plus</v-icon></v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <v-slide-group class="mb-5" :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card tile class="secondary mr-2" width="230" falt outlined>
          <v-list-item>
            <v-list-item-action class="mr-4">
              <v-badge overlap bottom offset-y="19" color="transparent" right>
                <template v-slot:badge>
                  <v-icon size="30" color="amber">mdi-star</v-icon>
                </template>
                <v-avatar tile size="40">
                  <v-img src="/avatar.jpg"></v-img>
                </v-avatar>
              </v-badge>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Jean-marclenfa</v-list-item-title>
              <v-list-item-subtitle
                ><v-icon small>mdi-flag</v-icon> USA</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex justify-space-between align-center">
              <div>
                <div>
                  <v-icon small color="green">mdi-arrow-up</v-icon
                  ><strong class="green--text title">5.71%</strong>
                </div>
                <div>RETURN</div>
                <div>(LAST 12M)</div>
              </div>
              <div class="text-center">
                <v-icon>mdi-account-arrow-left-outline</v-icon>
                <div class="text-center">1,1005</div>
              </div>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex justify-space-between">
              <div>
                <div class="text--grey">Followers equity</div>
                <div class="green--text">215.252%</div>
              </div>
              <v-btn class="background"><v-icon>mdi-plus</v-icon></v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>