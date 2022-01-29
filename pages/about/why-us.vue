<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>House of Borse – Why Us? </h4>
    <p class="grey--text">
       Since our establishment, we have carved out a reputation as a leader in online trading by providing a reliable, user-oriented trading environment built on one of the most advanced platforms and regulated by one of the most highly regarded regulatory authorities. 
    </p>
    <v-divider class="mb-4"></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "About US",
          disabled: false,
          to: "/services/about-us",
        },
        {
          text: "Why us?",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>