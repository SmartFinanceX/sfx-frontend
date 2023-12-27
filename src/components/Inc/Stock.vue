<template>
  <v-container>
    <v-card>
      <v-tabs v-model="tab">
        <v-tab value="one">时分图</v-tab>
        <v-tab value="two">K线图</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            <div class="chart">
              <TimelyChart :TData="res"></TimelyChart>
            </div>
          </v-window-item>

          <v-window-item value="two">
            <div class="chart">
              <k-line :KData="data" :ticker="ticker"></k-line>
            </div>
            <p
              v-for="i in text.length"
              v-bind:key="i"
              style="font-size: 0.9rem; opacity: 0.65"
            >
              {{ text[i - 1] }}
            </p>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script setup></script>
<script>
import KLine from "@/components/Inc/KLine.vue";
import TimelyChart from "@/components/Inc/TimelyPrice.vue";
export default {
  props: ["ticker"],
  components: {
    KLine,
    TimelyChart,
  },
  data() {
    return {
      tab: null,
      data: [],
      res: {
        data: [],
        perClose: "",
      },
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
    //获得K线图数据
    search() {
      console.log("Stock");
      const url = `${this.$target}/stock/k/${this.ticker}/60`;
      this.$http.get(url).then((res) => {
        console.log(res.data);
        this.data = res.data;
      });
    },
    getTData() {
      let code = addStockExchangePrefix(this.ticker);
      const url = `https://web.ifzq.gtimg.cn/appstock/app/minute/query?code=${code}`;

      this.res.data = [];
      this.res.perClose = "";
      this.$http.get(url).then((res) => {
        // console.log(res);
        let data = res.data.data;
        console.log(data);
        let close, high, low, money, open, time, volume, perClose;
        //依次为当前价，最高价，最低价，成交量，开盘价，时间，成交量，昨收价

        high = data[code].qt[code][33];
        low = data[code].qt[code][34];
        open = data[code].qt[code][5];
        perClose = data[code].qt[code][4];
        for (let i = 0; i < data[code].data.data.length; i++) {
          this.res.data.push({
            close: splitData(data[code].data.data[i], 1),
            high: high,
            low: low,
            money:
              splitData(data[code].data.data[i], 3) -
              (i == 0 ? 0 : splitData(data[code].data.data[i - 1], 3)),
            open: open,
            time: formatDateTime(
              data[code].data.date + splitData(data[code].data.data[i], 0)
            ),
            volume:
              splitData(data[code].data.data[i], 2) -
              (i == 0 ? 0 : splitData(data[code].data.data[i - 1], 2)),
          });
        }
        this.res.perClose = perClose;
        // console.log(this.res);
      });

      //数据切割函数
      function splitData(inputString, index) {
        // 使用空格分隔字符串
        var dataArray = inputString.split(" ");

        // 返回指定索引的数据
        if (index < dataArray.length) {
          return dataArray[index];
        } else {
          // 如果索引超出数组范围，返回null或者其他适当的值
          return null;
        }
      }
      // 函数：将日期时间字符串转换为指定格式
      function formatDateTime(inputData) {
        var parsed_datetime = new Date(
          parseInt(inputData.substring(0, 4)),
          parseInt(inputData.substring(4, 6)) - 1,
          parseInt(inputData.substring(6, 8)),
          parseInt(inputData.substring(8, 10)),
          parseInt(inputData.substring(10, 12))
        );

        var formatted_datetime =
          parsed_datetime.getFullYear() +
          "-" +
          ("0" + (parsed_datetime.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + parsed_datetime.getDate()).slice(-2) +
          " " +
          ("0" + parsed_datetime.getHours()).slice(-2) +
          ":" +
          ("0" + parsed_datetime.getMinutes()).slice(-2);

        return formatted_datetime;
      }
      // 函数，根据股票代码，返回股票代码全称
      function addStockExchangePrefix(stockCode) {
        if (/^\d+$/.test(stockCode)) {
          const exchange = parseInt(stockCode.substring(0, 2));

          // 交易所代码规则可能需要进一步验证
          if (exchange === 60 || exchange === 90) {
            // 60 开头的股票代码表示上海证券交易所
            return "sh" + stockCode;
          } else if (exchange === 0 || exchange === 30 || exchange === 20) {
            // 0、30、20 开头的股票代码表示深圳证券交易所
            return "sz" + stockCode;
          }
        }

        // 如果股票代码格式不符合预期，返回原始股票代码
        return stockCode;
      }
    },
  },
  created() {
    this.search();
    this.getTData();
  },
};
</script>

<style scoped>
.chart {
  margin: auto;
  width: 1000px;
  height: 500px;
}
</style>
