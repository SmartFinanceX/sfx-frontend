<template>
  <v-container>
    <v-sheet class="d-flex flex-wrap">
      <v-sheet class="flex-1-0 ma-2 pa-2" max-width="667">
        <v-btn
          v-for="n in 5"
          v-bind:key="n"
          @click="getdata(n)"
          style="
            height: 50px;
            width: 19%;
            margin-left: 1%;
            font-weight: bold;
            font-size: large;
          "
          >{{ this.items[n - 1] }}</v-btn
        >
        <div style="width: 100%; height: 400px; margin-top: 20px">
          <my-chart :chartdata="data"></my-chart>
        </div>
      </v-sheet>

      <v-sheet class="ma-2 pa-2" max-width="329">
        <infor :infor="infor"></infor>
        <div v-show="cards.length != 0">
          <p style="font-weight: bold; font-size: 1.2rem">相关资讯</p>
          <!-- <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            ></v-img> -->
          <v-card-text
            class="text"
            v-for="card in cards"
            v-bind:key="card.title"
            v-text="card.title"
            @click="window(card.url)"
          ></v-card-text>
        </div>
      </v-sheet>
    </v-sheet>
    <div style="width: 66%; display: inline-block; margin-right: 1%"></div>
    <div style="width: 33%; display: inline-block"></div>
  </v-container>
</template>
<script setup></script>
<script>
import myChart from "@/components/Inc/ChartBasic.vue";
import Infor from "@/components/Inc/infor.vue";
export default {
  props: ["ticker"],
  components: {
    myChart,
    Infor,
  },
  data() {
    return {
      key: "5edaca3ae98496546e95a7b0be57346b",
      num: 3,
      name: "",
      data: {},
      infor: {},
      items: ["净利润", "总收入", "总成本", "归母净利润", "扣非净利润"],
      cards: [
        //样例数据
        // {
        //   title: "• 北京文化被深交所问询：说明《倩女幽魂》片酬成本是否合理等",
        //   src: "https://imagecloud.thepaper.cn/thepaper/image/134/70/188.jpg",
        //   url: "https://www.thepaper.cn/newsDetail_forward_12874362",
        // },
      ],
    };
  },
  methods: {
    getdata(category) {
      const url = `/api/inc/_fnc/${this.ticker}/${category}`;
      // console.log(url);
      let that = this;
      this.$http.get(url).then((res) => {
        // console.log(res);
        res.data.data.finanace_data = res.data.data.finanace_data.reverse();
        that.data.value = res.data.data.finanace_data;
        //父组件调用子组件的方法
        // that.$refs.myChart.draw(this.data);
      });
    },
    search() {
      const url = `${this.$target}/inc/_ticker/${this.ticker}`;
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res.data.data);
          this.name = res.data.data.stockName;
          this.infor = res.data.data;
          this.infor.listDate = res.data.data.listDate.split("T")[0];

          //获取新闻数据
          let url = `https://apis.tianapi.com/caijing/index?key=${this.key}&num=${this.num}&word=${this.name}`;
          console.log(url);
          this.$http.get(url).then((res) => {
            console.log(res);
            let i = 0;
            for (; i < res.data.result.allnum; i++) {
              this.cards.push({
                title: "• " + res.data.result.newslist[i].title,
                src: res.data.result.newslist[i].picUrl,
                url: res.data.result.newslist[i].url,
              });
            }
          });
        })
        .catch((error) => {
          console.error("Error fetching information:", error);
        });
    },
    window(url) {
      if (url && typeof url === "string") window.open(url, "_blank");
    },
  },
  mounted() {
    this.search();
    this.getdata(1);
  },
};
</script>

<style scoped>
.text {
  cursor: pointer;
  margin-top: -16px;
  margin-bottom: -32px;
}
.text:hover {
  color: #ff0000;
}
</style>
