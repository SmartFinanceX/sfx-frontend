<template>
  <v-container>
    <div class="price"><timely-price></timely-price></div>
    <div class="kchart"><k-line :KData="data" :ticker="ticker"></k-line></div>
  </v-container>
</template>
<script setup></script>
<script>
import KLine from "@/components/Inc/KLine.vue";
import TimelyPrice from "@/components/Inc/TimelyPrice.vue";
export default {
  props: ["ticker"],
  components: {
    KLine,
    TimelyPrice,
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    search() {
      console.log("Stock")
      const url = `${this.$target}/stock/k/${this.ticker}/60`;
      this.$http.get(url).then((res) => {
        console.log(res.data);
        this.data = res.data;
      });
    },
  },
  created() {
    this.search();
  },
};
</script>

<style scoped>
.kchart {
  margin: auto;
  width: 1000px;
  height: 500px;
}
</style>
