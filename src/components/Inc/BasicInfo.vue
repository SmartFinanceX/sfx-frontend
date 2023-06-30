<template>
  <v-container>
    <div class="botton">
      <v-btn round @click="getdata(1)" class="botton">净利润</v-btn>
      <v-btn round @click="getdata(2)" class="botton">总收入</v-btn>
      <v-btn round @click="getdata(3)" class="botton">总成本</v-btn>
      <v-btn round @click="getdata(4)" class="botton">归母净利润</v-btn>
      <v-btn round @click="getdata(5)" class="botton">扣非净利润</v-btn>
    </div>
    <div class="chart">
      <!-- <my-chart ref="myChart" :chartdata="data"></my-chart> -->
      <my-chart :chartdata="data"></my-chart>
    </div>
  </v-container>
</template>
<script setup></script>
<script>
import myChart from "@/components/Inc/ChartBasic.vue";
export default {
  props: ["ticker"],
  components: {
    myChart,
  },
  data() {
    return {
      data: {},
    };
  },
  created() {
    this.getdata(1);
  },
  methods: {
    getdata(category) {
      // console.log(this);
      const url = `http://124.222.191.199:9000/inc/_fnc/${this.ticker}/${category}`;
      // console.log(url);
      let that = this;
      this.$http.get(url).then((res) => {
        console.log(res);
        that.data.value = res.data.data.finanace_data.reverse();
        //父组件调用子组件的方法
        // that.$refs.myChart.draw(this.data);
      });
    },
  },
};
</script>

<style scoped>
.botton {
  text-align: center;
  margin: 0 5px;
}
</style>
