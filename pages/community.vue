<template>
  <div>
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
        <v-icon>mdi-heart-outline</v-icon>&nbsp;1k&nbsp;&nbsp;
        <v-icon>mdi-comment-outline</v-icon>&nbsp;10&nbsp;&nbsp;
        <v-icon>mdi-share</v-icon>
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
        <v-icon>mdi-heart-outline</v-icon>&nbsp;1k&nbsp;&nbsp;
        <v-icon>mdi-comment-outline</v-icon>&nbsp;10&nbsp;&nbsp;
        <v-icon>mdi-share</v-icon>
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
    <v-card class="secondary mb-12" flat>
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
        <v-icon>mdi-heart-outline</v-icon>&nbsp;1k&nbsp;&nbsp;
        <v-icon>mdi-comment-outline</v-icon>&nbsp;10&nbsp;&nbsp;
        <v-icon>mdi-share</v-icon>
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
              <v-avatar style="border:solid 1px white;" class="mb-2">
                <v-icon>mdi-link-variant</v-icon>
              </v-avatar>
              <br />
              Link
            </div>
          </v-col>
           <v-col>
            <div class="text-center">
              <v-avatar style="border:solid 1px white;" class="mb-2">
                <v-icon>mdi-share-variant</v-icon>
              </v-avatar>
              <br />
              Share
            </div>
          </v-col>
           <v-col>
            <div class="text-center">
              <v-avatar style="border:solid 1px red;" class="mb-2">
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
    };
  },
};
</script>

<style>
</style>