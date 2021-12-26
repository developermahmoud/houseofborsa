<template>
  <div>
    <div class="d-flex">
      <div class="mr-2">
        <h5>BNB/BUD<span class="green--text">&nbsp;+14.47%</span></h5>
        <v-sparkline
          height="110"
          :fill="fill"
          :gradient="selectedGradient"
          :line-width="width"
          :padding="padding"
          :smooth="radius || false"
          :value="value"
          auto-draw
        ></v-sparkline>
      </div>
      <div class="mr-2">
        <h5>BTC/BUSD<span class="green--text">&nbsp; +3.06%</span></h5>
        <v-sparkline
          height="110"
          :fill="fill"
          :gradient="selectedGradient"
          :line-width="width"
          :padding="padding"
          :smooth="radius || false"
          :value="value"
          auto-draw
        ></v-sparkline>
      </div>
      <div>
        <h5>BTC/BUSD<span class="green--text">&nbsp; +3.06%</span></h5>
        <v-sparkline
          height="110"
          :fill="fill"
          :gradient="selectedGradient"
          :line-width="width"
          :padding="padding"
          :smooth="radius || false"
          :value="value"
          auto-draw
        ></v-sparkline>
      </div>
    </div>
  </div>
</template>

<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
export default {
  data() {
    return {
      fill: true,
      selectedGradient: gradients[3],
      gradients,
      padding: 8,
      radius: 10,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      width: 2,
    };
  },
};
</script>

<style>
</style>