<!-- 网站首页 -->
<!-- 收藏逻辑还有点问题，selected需要每个进行分配 -->
<template>
  <v-card-title style="font-weight: bold">市场</v-card-title>
  <v-container class="d-flex flex-wrap">
    <v-container class="box1">
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

      <TimelyChart class="chart"></TimelyChart>
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

      <v-list lines="one">
        <!-- <v-list-header inset>龙虎榜</v-list-header> -->
        <v-list-item v-for="stock in stocks" :key="stock.code" class="recom"
          ><div class="text-h6" v-on:click="click(stock.code)">
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
<script setup></script>
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
    items: [
      // 注意这里的tag考虑的还不全面，如果是不跌不涨那么应该是黑色
      {
        name: "上证指数",
        price: "3038.97",
        range: "-14.31(-0.47%)",
        tag: -1,
      },
      {
        name: "深证成指",
        price: "9978.54",
        range: "0.00(0.00%)",
        tag: 0,
      },
      {
        name: "创业板指数",
        price: "2005.24",
        range: "-13.15(-0.65%)",
        tag: -1,
      },
      {
        name: "USD/CNY",
        price: "7.29",
        range: "+0.01(+0.08%)",
        tag: 1,
      },
      {
        name: "恒生指数",
        price: "17203.26",
        range: "-308.20(-1.76%)",
        tag: -1,
      },
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
  }),
  methods: {
    click(ticker) {
      router.push({
        path: "/inc/" + ticker,
      });
    },
    getLonghubang() {
      const url = `http://api.mairui.club/hilh/mrxq/e6d685222334fd1d95`;
      this.$http.get(url).then((res) => {
        // console.log(res);
        let need = [];
        //提取想要的数据
        need[0] = res.data.dpl7[0];
        need[1] = res.data.dpl7[1];
        need[2] = res.data.zpl7[0];
        need[3] = res.data.zpl7[1];
        need[4] = res.data.h20[0];
        need[5] = res.data.h20[1];
        // console.log(need);
        for (let i = 0; i < 6; i++) {
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
  },
  computed: {},
  mounted() {
    this.getLonghubang();
  },
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
