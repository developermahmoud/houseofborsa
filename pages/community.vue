<template>
  <div>
    <div class="mb-3 d-flex justify-space-between align-center">
      <h4 class="text-truncate">Top Traders</h4>
      <nuxt-link to="/" class="text-decoration-none" style="font-size: 12px"
        >Show All</nuxt-link
      >
    </div>
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
                <div> <v-icon small color="green">mdi-arrow-up</v-icon><strong  class="green--text title">5.71%</strong></div>
                <div>RETURN</div>
                <div>(LAST 12M)</div>
              </div>
              <div>
                <v-icon>mdi-numeric-1-box</v-icon>
                <div class="text-center">RISK</div>
              </div>
             
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex justify-space-between">
              <div>
                <div><strong class="white--text">289</strong> COPIERS</div>
                <div class="caption">
                  <v-icon small color="green">mdi-arrow-up</v-icon>1.05% LAST 7D
                </div>
              </div>
              <v-btn class="background"><v-icon>mdi-plus</v-icon></v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <v-slide-group v-model="text" class="mb-5" mandatory>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          class="mr-2"
          value="Feed"
          :input-value="active"
          text
          active-class="primary"
          @click="toggle"
        >
          Feed
        </v-btn>
      </v-slide-item>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          class="mr-2"
          value="News"
          text
          :input-value="active"
          active-class="primary"
          @click="toggle"
        >
          News
        </v-btn>
      </v-slide-item>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          class="mr-2"
          value="Leaders"
          text
          :input-value="active"
          active-class="primary"
          @click="toggle"
        >
          Leaders
        </v-btn>
      </v-slide-item>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          class="mr-2"
          value="Competitions"
          text
          :input-value="active"
          active-class="primary"
          @click="toggle"
        >
          Competitions
        </v-btn>
      </v-slide-item>
    </v-slide-group>
    <v-card class="secondary mb-5" flat>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="/opengraph.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>AWS services</v-list-item-title>
          <v-list-item-subtitle
            >2h ·
            <v-icon size="15" color="grey"
              >mdi-earth</v-icon
            ></v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-icon @click="postDotsDialog = true">mdi-dots-vertical</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-card-text>
        Lorem ipsum dolor sit
        <nuxt-link to="/">#first_hash_tag</nuxt-link> consectetur adipisicing
        elit. <nuxt-link to="/">#second_hash_tag</nuxt-link>
      </v-card-text>
      <v-img src="/wall.png" />
      <v-card-title>
        <v-icon size="19">mdi-heart-outline</v-icon>&nbsp;<span
          style="font-size: 15px"
          >1k</span
        >&nbsp;&nbsp; <v-icon size="19">mdi-comment-outline</v-icon>&nbsp;<span
          style="font-size: 15px"
          >10</span
        >&nbsp;&nbsp;
        <v-icon size="19">mdi-share</v-icon>
        <v-spacer></v-spacer>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/1.jpg"></v-img>
        </v-avatar>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/2.jpg"></v-img>
        </v-avatar>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/3.jpg"></v-img>
        </v-avatar>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/4.jpg"></v-img>
        </v-avatar>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/5.jpg"></v-img>
        </v-avatar>
      </v-card-title>
    </v-card>
    <v-card class="secondary mb-5" flat>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="/opengraph.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>AWS services</v-list-item-title>
          <v-list-item-subtitle
            >2h ·
            <v-icon size="15" color="grey"
              >mdi-earth</v-icon
            ></v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-icon @click="postDotsDialog = true">mdi-dots-vertical</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-card-text>
        Lorem ipsum dolor sit
        <nuxt-link to="/">#first_hash_tag</nuxt-link> consectetur adipisicing
        elit. <nuxt-link to="/">#second_hash_tag</nuxt-link>
      </v-card-text>
      <v-card-title>
        <v-icon size="19">mdi-heart-outline</v-icon>&nbsp;<span
          style="font-size: 15px"
          >1k</span
        >&nbsp;&nbsp; <v-icon size="19">mdi-comment-outline</v-icon>&nbsp;<span
          style="font-size: 15px"
          >10</span
        >&nbsp;&nbsp;
        <v-icon size="19">mdi-share</v-icon>
        <v-spacer></v-spacer>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/1.jpg"></v-img>
        </v-avatar>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/2.jpg"></v-img>
        </v-avatar>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/3.jpg"></v-img>
        </v-avatar>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/4.jpg"></v-img>
        </v-avatar>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/5.jpg"></v-img>
        </v-avatar>
      </v-card-title>
    </v-card>
    <v-card class="secondary" flat>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="/opengraph.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>AWS services</v-list-item-title>
          <v-list-item-subtitle
            >2h ·
            <v-icon size="15" color="grey"
              >mdi-earth</v-icon
            ></v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-icon @click="postDotsDialog = true">mdi-dots-vertical</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-card-text>
        Lorem ipsum dolor sit
        <nuxt-link to="/">#first_hash_tag</nuxt-link> consectetur adipisicing
        elit. <nuxt-link to="/">#second_hash_tag</nuxt-link>
      </v-card-text>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/ulprqHHWlng"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <v-card-title>
        <v-icon size="19">mdi-heart-outline</v-icon>&nbsp;<span
          style="font-size: 15px"
          >1k</span
        >&nbsp;&nbsp; <v-icon size="19">mdi-comment-outline</v-icon>&nbsp;<span
          style="font-size: 15px"
          >10</span
        >&nbsp;&nbsp;
        <v-icon size="19">mdi-share</v-icon>
        <v-spacer></v-spacer>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/1.jpg"></v-img>
        </v-avatar>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/2.jpg"></v-img>
        </v-avatar>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/3.jpg"></v-img>
        </v-avatar>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/4.jpg"></v-img>
        </v-avatar>
        <v-avatar size="30" class="ml-n3">
          <v-img src="/profile/5.jpg"></v-img>
        </v-avatar>
      </v-card-title>
    </v-card>

    <v-bottom-sheet class="rounded-bl-0" v-model="postDotsDialog">
      <v-card class="secondary rounded-bl-0">
        <v-row class="pt-5">
          <v-col>
            <div class="text-center">
              <v-avatar style="border: solid 1px white" class="mb-2">
                <v-icon>mdi-link-variant</v-icon>
              </v-avatar>
              <br />
              Link
            </div>
          </v-col>
          <v-col>
            <div class="text-center">
              <v-avatar style="border: solid 1px white" class="mb-2">
                <v-icon>mdi-share-variant</v-icon>
              </v-avatar>
              <br />
              Share
            </div>
          </v-col>
          <v-col>
            <div class="text-center">
              <v-avatar style="border: solid 1px red" class="mb-2">
                <v-icon color="red">mdi-comment-alert-outline</v-icon>
              </v-avatar>
              <br />
              <span class="red--text">Report</span>
            </div>
          </v-col>
        </v-row>
        <v-list class="secondary">
          <v-list-item>
            <v-list-item-title>Why you'r seeing this post</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title>Hide</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>About this account</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Unfollow</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  layout: "community",
  data() {
    return {
      postDotsDialog: false,
      text: "Feed",
    };
  },
  methods: {
    toggle() {},
  },
};
</script>

<style>
</styles>