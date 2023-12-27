<template>
  <v-container class="d-flex flex-wrap">
    <v-container class="box1">
      <router-link :to="{ name: 'Dashboard' }">
        <v-btn
          v-for="item in items"
          v-bind:key="item.name"
          style="height: 110px; width: 19%; margin-left: 1%"
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
      </router-link>
    </v-container>

    <v-card flat>
      <v-card-title class="d-flex align-center pe-2" style="font-weight: 900">
        <v-icon icon="mdi-star-box"></v-icon> &nbsp; 自选股票

        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          density="compact"
          label="检索自选股"
          single-line
          flat
          hide-details
          variant="solo-filled"
        ></v-text-field>
      </v-card-title>

      <v-divider></v-divider>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        :items-per-page="5"
        loading-text="数据加载中..."
        no-data-text="这里没有你想看的股票，快去首页看看吧。"
        items-per-page-text="每页显示数量"
        density="comfortable"
      >
        <template v-slot:item.code="{ value }">
          <v-chip @click="click(value)">{{ value }}</v-chip>
        </template>
        <template v-slot:item.change="{ value }">
          <v-chip :color="getColor(value)">{{ value }}</v-chip>
        </template>
        <template v-slot:item.range="{ value }">
          <v-chip :color="getColor(value)">{{ value }}</v-chip>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { VDataTable } from "vuetify/labs/components";
import router from "@/router";
export default {
  components: {
    VDataTable,
  },
  created() {
    // 从本地存储中加载数据
    const watchlists = JSON.parse(localStorage.getItem("watchlists"));
    if (watchlists) {
      this.watchlists = watchlists;
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
  data() {
    return {
      names: ["上证指数", "深证成指", "中小100", "创业板指", "沪深300"],
      codes: ["sh000001", "sz399001", "sz399005", "sz399006", "sh000300"],
      items: [
        //样例数据
        // {
        //   name: "上证指数",
        //   price: "3038.97",
        //   range: "-14.31(-0.47%)",
        //   tag: -1,
        // },
        // {
        //   name: "深证成指",
        //   price: "9978.54",
        //   range: "0.00(0.00%)",
        //   tag: 0,
        // },
        // {
        //   name: "中小100",
        //   price: "7.29",
        //   range: "+0.01(+0.08%)",
        //   tag: 1,
        // },
        // {
        //   name: "创业板指",
        //   price: "2005.24",
        //   range: "-13.15(-0.65%)",
        //   tag: -1,
        // },
        // {
        //   name: "沪深300",
        //   price: "17203.26",
        //   range: "-308.20(-1.76%)",
        //   tag: -1,
        // },
      ],
      search: "",
      headers: [
        { align: "start", key: "code", sortable: false, title: "代码" },
        { key: "name", title: "名称", sortable: false },
        { key: "price", title: "最新" },
        { key: "change", title: "涨跌额" },
        { key: "range", title: "涨跌幅" },
        { key: "volume", title: "成交量（手）" },
        { key: "turnover", title: "成交额" },
        { key: "turnoverrate", title: "换手率" },
        { key: "value", title: "市值" },
        { key: "perate", title: "市盈率" },
      ],
      desserts: [
        //数据样例
        {
          code: "000001",
          name: "平安银行",
          price: 9.49,
          change: -0.06,
          range: "-0.63%",
          volume: "58.54万",
          turnover: "5.52亿",
          turnoverrate: "0.30%",
          value: "1831.92亿",
          perate: 3.47,
          tag: -1,
        },
      ],
      watchlists: [],
      trigger: false,
    };
  },
  methods: {
    click(ticker) {
      router.push({
        path: "/inc/" + ticker,
      });
    },
    getData() {
      let i = 0;
      for (; i < this.watchlists.length; i++) {
        const url1 = `${this.$target}/inc/_ticker/${this.watchlists[i]}`;
        let stick = this.watchlists[i];
        this.$http
          .get(url1)
          .then((res1) => {
            // console.log(res1.data.data);
            const url2 = `https://api.mairui.club/hsrl/ssjy/${stick}/${this.$mydatakey}`;
            this.$http.get(url2).then((res2) => {
              // console.log(res2);
              let tag;
              if (res2.data.ud > 0) tag = 1;
              else if (res2.data.ud < 0) tag = -1;
              else tag = 0;
              this.desserts.push({
                code: stick,
                name: res1.data.data.stockName,
                price: res2.data.p,
                change: res2.data.ud,
                range: res2.data.pc + "%",
                volume: (res2.data.v / 1e4).toFixed(2) + "万",
                turnover: (res2.data.cje / 1e8).toFixed(2) + "亿",
                turnoverrate: res2.data.hs + "%",
                value: (res2.data.sz / 1e8).toFixed(2) + "亿",
                perate: res2.data.pe,
                tag: tag,
              });
            });
          })
          .catch((error) => {
            console.error("Error fetching information:", error);
          });
      }
    },
    getColor(value) {
      const data = parseFloat(value);
      // console.log(data);
      if (data > 0) return "red";
      else if (data < 0) return "green";
      else return "black";
    },

    // getIndex() {
    //   let i = 0;
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
    //         });
    //       });
    //   }
    // },

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
  },
  mounted() {
    // 节约次数
    this.getData();
    this.getIndex();
  },
};
</script>

<style>
.box1 {
  margin-top: -20px;
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
