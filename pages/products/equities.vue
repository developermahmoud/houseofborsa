<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Equities</h4>
    <p class="grey--text">
      House of Borse has an extensive equities offering, giving clients access
      to hundreds of shares in some of the world's most important and
      influential corporations, including Apple, Facebook, Amazon, BP plc and
      Google.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Trading Products",
          disabled: false,
          to: "/tradings/products",
        },
        {
          text: "Equities",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>