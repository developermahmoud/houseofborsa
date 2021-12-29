<template>
  <div>
    <v-carousel
      cycle
      height="auto"
      hide-delimiter-background
      :show-arrows="false"
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <img style="width: 100%" :src="item.src"
      /></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/slider/1.jpeg",
        },
        {
          src: "/slider/2.jpeg",
        },
        {
          src: "/slider/3.jpeg",
        },
      ],
    };
  },
};
</script>

<style></style>
