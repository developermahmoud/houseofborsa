<template>
  <div>
    <v-tabs fixed-tabs background-color="secondary">
      <v-tab>Inbox</v-tab>
      <v-tab>Outbox</v-tab>
    </v-tabs>
    <v-list three-line class="transparent">
      <template v-for="(item, index) in items">
        <v-list-item :key="item.title">
          <template v-slot:default="{ active }">
            <v-list-item-avatar size="30" tile>
              <v-img v-if="index === 1" src="/hob.jpeg"></v-img>
              <v-img v-else src="/avatar.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>

              <v-list-item-subtitle
                class="text--primary"
                v-text="item.headline"
              ></v-list-item-subtitle>

              <v-list-item-subtitle
                v-text="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text
                v-text="item.action"
              ></v-list-item-action-text>

              <v-icon v-if="!active" color="grey lighten-1">
                mdi-star-outline
              </v-icon>

              <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          action: "15 min",
          headline: "Brunch this weekend?",
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: "Ali Connors",
        },
        {
          action: "2 hr",
          headline: "Summer BBQ",
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: "me, Scrott, Jennifer",
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          subtitle: "Do you have Paris recommendations? Have you ever been?",
          title: "Sandra Adams",
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?",
          title: "Trevor Hansen",
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
          title: "Britta Holt",
        },
      ],
    };
  },
};
</script>

<style>
</style>