<template>
  <div>
    <v-carousel
      cycle
      height="230"
      hide-delimiter-background
      :show-arrows="false"
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/slider/1.jpg",
        },
        {
          src: "/slider/2.jpg",
        },
        {
          src: "/slider/3.png",
        },
        {
          src: "/slider/4.png",
        },
      ],
    };
  },
};
</script>

<style></style>
