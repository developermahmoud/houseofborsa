<template>
  <div>
    <v-card class="mb-5 secondary" flat rounded>
      <v-card-title class="body-1"
        >Earn up to 14% interest!<v-spacer></v-spacer
        ><v-icon>mdi-close</v-icon></v-card-title
      >
      <v-card-text class="pb-0"
        >Start earning high returns on your crypto with Covesting Yield
        Account.</v-card-text
      >
      <v-card-actions>
        <img style="width: 70px" src="/cov-yield.875d03a81a9cb1ce.png" />
        <v-spacer></v-spacer>
        <v-btn text small class="primary">start earning</v-btn>
      </v-card-actions>
    </v-card>
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