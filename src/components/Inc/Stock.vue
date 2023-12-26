<template>
  <v-container>
    <!-- <div class="price"><timely-price></timely-price></div> -->
    <div class="kchart">
      <k-line :KData="data" :ticker="ticker"></k-line>
    </div>
    <p
      v-for="i in text.length"
      v-bind:key="i"
      style="font-size: 0.9rem; opacity: 0.65"
    >
      {{ text[i - 1] }}
    </p>
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
      text: [
        "本系统提供的K线图呈现的是上市公司上市以来的所有股票数据，并给出了多种均线指标，下面是各种均线的含义。",
        "日K线:表示每个K线代表一个交易日的价格波动情况，每根K线包含开盘价、收盘价、最高价和最低价。",
        "5日均线:是过去5个交易日收盘价的平均值，用于观察短期内价格趋势，平滑每日的价格波动，帮助分析短期市场走势。",
        "10日均线：是过去10个交易日收盘价的平均值，较5日均线更长，可用于观察中短期的价格趋势，平滑短期内的价格波动。",
        "20日均线：是过去20个交易日收盘价的平均值，用于观察中期市场趋势，对价格波动进行平滑，反映出较长时间内的价格变化趋势。",
        "30日均线：是过去30个交易日收盘价的平均值，较20日均线更长，主要用于观察较长时间内的价格趋势，能够反映出相对长期的市场走势。",
      ],
    };
  },
  methods: {
    search() {
      const url = `${this.$target}/stock/k/${this.ticker}/60`;
      this.$http.get(url).then((res) => {
        // console.log(res.data);
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
