<!-- 网站首页 -->
<template>
  <v-card-title style="font-weight: bold">市场</v-card-title>
  <v-container class="d-flex flex-wrap">
    <v-container class="box1">
      <v-btn
        v-for="item in items"
        v-bind:key="item.name"
        style="height: 110px; width: 19%; margin-left: 1%"
        @click="getData(item.index)"
      >
        <div class="text-h6 flex-grow-1">
          <div style="font-size: 1em">
            {{ item.name }}<v-icon icon="mdi-share-all-outline"></v-icon>
          </div>
          <div class="text-h5" style="font-weight: bold; font-size: 1em">
            {{ item.price }}
          </div>
          <div
            :class="{
              black: item.tag == 0 ? 1 : 0,
              red: item.tag == 1 ? 1 : 0,
              green: item.tag == -1 ? 1 : 0,
            }"
            style="font-size: 0.7em"
          >
            {{ item.range }}
          </div>
        </div>
      </v-btn>

      <div class="chart">
        <TimelyChart :TData="res"></TimelyChart>
      </div>
    </v-container>
    <v-container class="box2"
      ><v-card-title style="font-weight: bold"
        ><v-icon icon="mdi-rocket-launch-outline"></v-icon>
        <router-link :to="{ name: 'Collect' }" class="link"
          ><span class="underline">收藏列表</span>
        </router-link>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </v-card-title>
      <v-card-title style="font-size: 1em; font-weight: 900"
        >龙虎榜</v-card-title
      >

      <v-list lines="one" class="overflow-auto" style="max-height: 500px">
        <!-- <v-list-header inset>龙虎榜</v-list-header> -->
        <v-list-item v-for="stock in stocks" :key="stock.code" class="recom">
          <div class="text-h6" v-on:click="click(stock.code)">
            <div style="font-weight: bold">
              {{ stock.code }}
              <v-icon
                :class="{
                  black: stock.tag == 0 ? 1 : 0,
                  red: stock.tag == 1 ? 1 : 0,
                  green: stock.tag == -1 ? 1 : 0,
                }"
                :icon="this.icon[stock.tag + 1]"
              ></v-icon>
            </div>
            <div style="font-size: 0.9em">{{ stock.name }}</div>
          </div>
          <template v-slot:append>
            <v-list-item>
              <div class="text-h6" v-on:click="click(stock.code)">
                <div style="text-align: right">
                  {{ stock.price }}
                </div>
                <div
                  :class="{
                    black: stock.tag == 0 ? 1 : 0,
                    red: stock.tag == 1 ? 1 : 0,
                    green: stock.tag == -1 ? 1 : 0,
                  }"
                  style="text-align: right"
                >
                  {{ stock.range }}
                </div>
              </div>
            </v-list-item>
            <v-btn
              v-if="this.watchlists.indexOf(stock.code) == -1 ? 1 : 0"
              v-on:click="addticker(stock.code)"
              style="background-color: rgb(221, 218, 218)"
              icon="mdi-star-outline"
              variant="text"
              title="添加收藏"
            ></v-btn>
            <v-btn
              v-else
              v-on:click="rmticker(stock.code)"
              style="background-color: rgb(221, 218, 218)"
              icon="mdi-star-remove-outline"
              variant="text"
              title="取消收藏"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>

      <v-list> </v-list>
    </v-container>
  </v-container>
</template>
<!-- <script setup></script> -->
<script>
import router from "@/router";
import TimelyChart from "@/components/Inc/TimelyPrice.vue";
export default {
  name: "Dashboard",

  components: {
    TimelyChart,
    // IncCard: () => import("@/components/IncCard.vue"),
  },
  created() {
    // 从本地存储中加载数据
    const watchlists = JSON.parse(localStorage.getItem("watchlists"));
    if (watchlists) {
      this.watchlists = watchlists;
      // this.selcted = watchlists.indexOf(this.ticker) !== -1;
    }
  },
  watch: {
    // 监听 items 数组的变化，并将其保存到本地存储中
    watchlists: {
      handler(newItems) {
        localStorage.setItem("watchlists", JSON.stringify(newItems));
        this.trigger = !this.trigger;
      },
      deep: true,
    },
  },
  data: () => ({
    names: ["上证指数", "深证成指", "中小100", "创业板指", "沪深300"],
    codes: ["sh000001", "sz399001", "sz399005", "sz399006", "sh000300"],
    items: [
      // {
      //   name: "上证指数",
      //   price: "3038.97",
      //   range: "-14.31(-0.47%)",
      //   tag: -1,
      //   index: 0,
      // },
      // {
      //   name: "深证成指",
      //   price: "9978.54",
      //   range: "0.00(0.00%)",
      //   tag: 0,
      //   index: 1,
      // },
      // {
      //   name: "中小100",
      //   price: "7.29",
      //   range: "+0.01(+0.08%)",
      //   tag: 1,
      //   index: 2,
      // },
      // {
      //   name: "创业板指",
      //   price: "2005.24",
      //   range: "-13.15(-0.65%)",
      //   tag: -1,
      //   index: 3,
      // },
      // {
      //   name: "沪深300",
      //   price: "17203.26",
      //   range: "-308.20(-1.76%)",
      //   tag: -1,
      //   index: 4,
      // },
    ],
    stocks: [],
    // stocks: [//数据格式
    //   {
    //     code: "600519",
    //     name: "贵州茅台",
    //     price: "1775.84",
    //     range: "0.00%",
    //     tag: 0,
    //   },
    // ]

    icon: ["mdi-trending-down", "mdi-trending-neutral", "mdi-trending-up"],
    watchlists: [],
    trigger: false,
    res: {
      data: [],
      perClose: "",
    },
  }),
  methods: {
    click(ticker) {
      router.push({
        path: "/inc/" + ticker,
      });
    },
    getLonghubang() {
      const url = `http://api.mairui.club/hilh/mrxq/${this.$mydatakey}`;
      this.$http.get(url).then((res) => {
        // console.log(res);
        let need = [];
        //提取想要的数据
        need = res.data.z20;
        // need[0] = res.data.dpl7[0];
        // need[1] = res.data.dpl7[1];
        // need[2] = res.data.zpl7[0];
        // need[3] = res.data.zpl7[1];
        // need[4] = res.data.h20[0];
        // need[5] = res.data.h20[1];
        // console.log(need);
        for (let i = 0; i < need.length; i++) {
          let temp = 0;
          //处理涨跌标志
          if (parseFloat(need[i].val) < 0) {
            temp = -1;
            need[i].val = need[i].val + "%";
          } else if (parseFloat(need[i].val) > 0) {
            temp = 1;
            need[i].val = "+" + need[i].val + "%";
          }

          this.stocks.push({
            code: need[i].dm,
            name: need[i].mc,
            price: need[i].c,
            range: need[i].val,
            tag: temp,
          });
        }
      });
    },
    addticker(ticker) {
      // this.selcted = true;
      this.watchlists.push(ticker);
      // console.log(this.watchlists);
    },
    rmticker(ticker) {
      // this.selcted = false;
      const index = this.watchlists.indexOf(ticker);
      if (index != -1) {
        this.watchlists.splice(index, 1);
      }
    },
    async getIndex() {
      let i = 0;
      this.items = [];

      const promises = this.names.map((name, index) => {
        let code = this.codes[index];
        const url = `https://web.ifzq.gtimg.cn/appstock/app/minute/query?code=${code}`;
        return this.$http.get(url).then((res) => {
          let data = res.data.data;
          let tag;
          if (data[code].qt[code][31] > 0) tag = 1;
          else if (data[code].qt[code][31] < 0) tag = -1;
          else tag = 0;
          this.items.push({
            name: name,
            price: data[code].qt[code][3],
            range:
              data[code].qt[code][31] + "(" + data[code].qt[code][32] + "%)",
            tag: tag,
            index: index,
          });
        });
      });

      // 等待所有异步操作完成
      await Promise.allSettled(promises);

      // 所有异步操作完成后执行的代码
      // console.log(this.items);
    },

    // getIndex() {
    //   let i = 0;
    //   let index = i;
    //   for (; i < this.names.length; i++) {
    //     let name = this.names[i];
    //     this.$http
    //       .get(
    //         `http://api.mairui.club/zs/sssj/${this.codes[i]}/${this.$mydatakey}`
    //       )
    //       .then((res) => {
    //         // console.log(res);
    //         let tag;
    //         if (res.data.ud > 0) tag = 1;
    //         else if (res.data.ud < 0) tag = -1;
    //         else tag = 0;
    //         this.items.push({
    //           name: name,
    //           price: res.data.p,
    //           range: res.data.ud + "(" + res.data.pc + "%)",
    //           tag: tag,
    //           index: index,
    //         });
    //       });
    //   }
    // },

    getData(num) {
      const url = `https://web.ifzq.gtimg.cn/appstock/app/minute/query?code=${this.codes[num]}`;

      this.res.data = [];
      this.res.perClose = "";
      this.$http.get(url).then((res) => {
        let data = res.data.data;
        // console.log(data);
        let close, high, low, money, open, time, volume, perClose;
        //依次为当前价，最高价，最低价，成交量，开盘价，时间，成交量，昨收价

        high = data[this.codes[num]].qt[this.codes[num]][33];
        low = data[this.codes[num]].qt[this.codes[num]][34];
        open = data[this.codes[num]].qt[this.codes[num]][5];
        perClose = data[this.codes[num]].qt[this.codes[num]][4];
        for (let i = 0; i < data[this.codes[num]].data.data.length; i++) {
          this.res.data.push({
            close: splitData(data[this.codes[num]].data.data[i], 1),
            high: high,
            low: low,
            money:
              splitData(data[this.codes[num]].data.data[i], 3) -
              (i == 0
                ? 0
                : splitData(data[this.codes[num]].data.data[i - 1], 3)),
            open: open,
            time: formatDateTime(
              data[this.codes[num]].data.date +
                splitData(data[this.codes[num]].data.data[i], 0)
            ),
            volume:
              splitData(data[this.codes[num]].data.data[i], 2) -
              (i == 0
                ? 0
                : splitData(data[this.codes[num]].data.data[i - 1], 2)),
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
    },
  },
  computed: {},
  mounted() {
    this.getLonghubang();
    //为了节省请求次数，暂时关闭
    this.getIndex();
    this.getData(0);
  },
  created() {},
};
</script>

<style scoped>
.box1 {
  width: 67%;
  margin-top: -20px;
}

.box2 {
  width: 33%;
  margin-top: -20px;
}

.underline:hover {
  text-decoration: underline;
  cursor: pointer;
}

.link {
  color: inherit;
}

.recom:hover {
  cursor: pointer;
  background-color: rgb(238, 235, 235);
}

.chart {
  margin-right: 1%;
  margin-top: 16px;
}

.green {
  color: green;
}

.red {
  color: red;
}

.black {
  color: black;
}
</style>
