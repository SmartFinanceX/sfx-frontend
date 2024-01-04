<!-- <template>
  <v-container>
    <v-card class="mycard">
      <v-card-title>综合评分：</v-card-title>
      <div class="container">
        <span class="in"
          ><b>{{ score }}</b></span
        >
      </div>
      <v-card-text>{{ message[i] }}</v-card-text>
    </v-card>
    <v-card class="mycard">
      <v-card-title>预测值：</v-card-title>
      <div class="container">
        <span class="in"
          ><b
            >预计在{{ date }}，以{{ yuce }}的拟合程度，该公司的{{
              name
            }}将会达到{{ value }}</b
          ></span
        >
      </div>
      <v-card-text
        >根据该公司现有数据，我们得到该公司目前的预测值，进而得到波动率预测和趋势预测</v-card-text
      >
    </v-card>
    <v-card class="mycard">
      <v-card-title>波动率预测：</v-card-title>
      <div class="container">
        <span class="in"
          ><b>{{ bodong[j] }}</b></span
        >
      </div>
      <v-card-text>{{ analysis[j] }}</v-card-text>
    </v-card>
    <v-card class="mycard">
      <v-card-title>趋势预测：</v-card-title>
      <div class="container">
        <span class="in"
          ><b>{{ qushi[k] }}</b></span
        >
      </div>
      <v-card-text>{{ trend[k] }}</v-card-text>
    </v-card>
  </v-container>
</template>
<script setup></script>
<script>
export default {
  props: ["ticker"],
  components: {},
  data() {
    return {
      message: [
        "优秀（Excellent）：公司在各项指标上表现出色，业绩稳定增长，财务状况良好，市场份额稳定增长，具备较高的竞争力和盈利能力。在行业中处于领先地位，被认为是优秀的投资对象。",
        "良好（Good）：公司在大部分指标上表现良好，业绩稳定或有增长趋势，财务状况健康，市场份额相对稳定，具备一定的竞争力和盈利能力。在行业中处于中上水平，有较高的投资价值。",
        "中等（Fair）：公司在一些指标上表现一般，业绩波动或增长缓慢，财务状况尚可，市场份额有限，竞争力和盈利能力有待提升。在行业中处于中等水平，投资风险和回报相对平衡。",
        "一般（Average）：公司在多个指标上表现一般，业绩波动较大或增长缓慢，财务状况一般，市场份额有限，竞争力和盈利能力较弱。在行业中处于中下水平，投资风险较高，预期回报相对有限。",
        "弱势（Weak）：公司在多个指标上表现较差，业绩下滑或持续亏损，财务状况不佳，市场份额缩小，缺乏竞争力和盈利能力。在行业中处于较弱势地位，投资风险高，预期回报较低。",
      ],
      bodong: ["低波动率", "中等波动率", "高波动率"],
      analysis: [
        "当公司的波动率较低时，通常表示市场对该公司的前景比较稳定，投资者对公司的风险较为乐观。这可能是因为公司具有稳定的盈利能力、良好的财务状况或行业内的领先地位。低波动率可能吸引那些寻求稳定投资回报的投资者。",
        "中等波动率表明公司的股价或资产价格有一定的波动性，但整体上保持相对稳定。这种情况下，公司可能面临一些行业内的竞争或市场风险，但仍然能够保持相对稳定的经营状况。投资者可能对这类公司感兴趣，寻求适度的投资回报和风险管理。",
        "当公司的波动率较高时，意味着其股价或资产价格可能经历较大的波动，投资风险较高。这可能是因为公司面临着市场不确定性、行业竞争激烈、盈利波动或其他风险因素的影响。高波动率可能吸引那些寻求高回报并能够承担较大风险的投资者。",
      ],
      qushi: ["上升趋势", "下降趋势", "直线趋势", "波动趋势"],
      trend: [
        "如果公司股价显示出持续上升的趋势，这可能意味着市场对该公司的前景持乐观态度。",
        "如果公司股价持续下降，这可能表明市场对该公司的前景持悲观态度。",
        "公司股价可能呈现稳定的直线趋势，即股价相对稳定地在一个水平区间内波动。",
        "公司股价的波动趋势可能显示出较大的价格波动，既有上涨也有下跌，形成震荡走势。",
      ],
      i: null,
      j: null,
      k: null,
      score: 1.892,
      data: {
        ticker: `${this.ticker}`,
        //这里还是固定数据，要改
        category: 1,
      },
      yuce: null,
      date: "",
      name: "",
      value: "",
    };
  },
  created() {
    this.getScore();
    this.getTrend();
  },
  methods: {},
  methods: {
    getScore() {
      this.$http
        .get(
          `${this.$target}/stock/calculate_scores/${this.ticker}/${this.data.category}`
        )
        .then((res) => {
          // 请求成功时的处理逻辑
          // console.log(res);
          this.score = res.data[0].score;
          if (this.score > 80.0) {
            this.i = 0;
            this.j = Math.floor(Math.random() * 10) % 1;
            this.k = Math.floor(Math.random() * 10) % 4;
          } else if (this.score > 40) {
            this.i = 1;
            this.j = Math.floor(Math.random() * 10) % 2;
            this.k = Math.floor(Math.random() * 10) % 4;
          } else if (this.score > 20) {
            this.i = 2;
            this.j = Math.floor(Math.random() * 10) % 3;
            this.k = Math.floor(Math.random() * 10) % 4;
          } else if (this.score > 0) {
            this.i = 3;
            this.j = 2;
            this.k = Math.floor(Math.random() * 10) % 4;
          } else {
            this.i = 4;
            this.j = 2;
            this.k = Math.floor(Math.random() * 10) % 4;
          }
        });
    },
    getTrend() {
      this.$http
        .get(
          `${this.$target}/stock/predict/${this.ticker}/${this.data.category}`
        )
        .then((res) => {
          // console.log(res);
          (this.yuce = res.data.r_squared),
            (this.date = res.data.future_predictions[0].date);
          this.value = res.data.future_predictions[0].value;
          if (res.data.category == 1) {
            this.name = "净利润";
          } else if (res.data.category == 2) {
            this.name = "总收入";
          } else if (res.data.category == 3) {
            this.name = "总成本";
          } else if (res.data.category == 4) {
            this.name = "归母净利润";
          } else {
            this.name = "扣非净利润";
          }
        });
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* 可选：设置容器的宽高 */
  width: 100%;
}

.mycard {
  /* flex: 0 0 300px; */
  margin: 20px;
}

.in {
  font-size: 700;
  text-align: center;
}
</style> -->

<template>
  <v-container class="flex-column" style="margin-top: -16px">
    <v-container class="d-flex elevation-0">
      <v-container class="elevation-2">
        <v-list lines="two">
          <v-list-item title="综合评分：">
            <div style="width: 100%; height: 400px">
              <score :score="score"></score>
            </div>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item title="预测值:">
            <v-card-text
              >预计在{{ date }}，公司的{{ predict[0].name }}将以{{
                predict[0].nihe
              }}的拟合程度达到{{ predict[0].value }}元</v-card-text
            >
            <v-card-text
              >公司的{{ predict[1].name }}将以{{
                predict[1].nihe
              }}的拟合程度达到{{ predict[1].value }}元</v-card-text
            >
            <v-card-text
              >公司的{{ predict[2].name }}将以{{
                predict[2].nihe
              }}的拟合程度达到{{ predict[2].value }}元</v-card-text
            >
            <v-card-text
              >公司的{{ predict[3].name }}将以{{
                predict[3].nihe
              }}的拟合程度达到{{ predict[3].value }}元</v-card-text
            >
            <v-card-text
              >公司的{{ predict[4].name }}将以{{
                predict[4].nihe
              }}的拟合程度达到{{ predict[4].value }}元</v-card-text
            >
            <v-card-subtitle
              >基于该公司历史数据，我们得到该公司目前的预测值。</v-card-subtitle
            >
          </v-list-item>
        </v-list>
      </v-container>
      <v-container class="elevation-2">
        <v-container>
          <v-btn class="btn" @click="click(1)">盈利能力</v-btn>
          <v-btn class="btn" @click="click(2)">运营能力</v-btn>
          <v-btn class="btn" @click="click(3)">成长能力</v-btn>
          <v-btn class="btn" @click="click(4)">偿债能力</v-btn>

          <div v-show="tag == 1">
            <div id="a" class="chart"></div>
            <p
              v-for="i in text1.length"
              v-bind:key="i"
              style="font-size: 0.9rem; opacity: 0.65"
            >
              {{ text1[i - 1] }}
            </p>
          </div>
          <div v-show="tag == 2">
            <div id="b" class="chart"></div>
            <p
              v-for="i in text2.length"
              v-bind:key="i"
              style="font-size: 0.9rem; opacity: 0.65"
            >
              {{ text2[i - 1] }}
            </p>
          </div>
          <div v-show="tag == 3">
            <div id="c" class="chart"></div>
            <p
              v-for="i in text3.length"
              v-bind:key="i"
              style="font-size: 0.95rem; opacity: 0.65"
            >
              {{ text3[i - 1] }}
            </p>
          </div>
          <div v-show="tag == 4">
            <div id="d" class="chart"></div>
            <p
              v-for="i in text4.length"
              v-bind:key="i"
              style="font-size: 0.9rem; opacity: 0.65"
            >
              {{ text4[i - 1] }}
            </p>
          </div>
        </v-container>
      </v-container>
    </v-container>
  </v-container>
  <notify ref="notifyBar"></notify>
</template>
<script setup>
import notify from "@/components/common/notify";
</script>
<script>
import Score from "@/components/Inc/Score.vue";
import * as echarts from "echarts";
export default {
  props: ["ticker"],
  components: {
    Score,
  },
  data: () => ({
    score: "66",
    date: "",
    predict: [
      {
        name: "净利润",
        nihe: "",
        value: "",
      },
      {
        name: "总收入",
        nihe: "",
        value: "",
      },
      {
        name: "总成本",
        nihe: "",
        value: "",
      },
      {
        name: "归母净利润",
        nihe: "",
        value: "",
      },
      {
        name: "扣非净利润",
        nihe: "",
        value: "",
      },
    ],
    // ticker: "000001",
    tab: null,
    tag: 1,
    // 依次对应四个图的数据
    data1: [-60, 32, 85],
    data2: [34, 78, 50],
    data3: [60, 73, 85, 32, 12, 86],
    data4: [60, 73, 32, 12, 86],
    text1: [
      "• 净资产收益率（ROE）是衡量上市公司盈利能力的重要指标。净资产收益率反映股东权益的收益水平，用以衡量公司运用自有资本的效率，指标值越高，收益越高。",
      "• 毛利率反映产品的成本与收入的关系，可以做为公司衡量一个商品是否值得继续贩售的指标，同时反映公司是否做好成本控制。",
      "• 净利率是反映企业盈利能力的另外一项重要的财务指标，等于净利润与营业收入的比率，是收入扣除所有成本、费用和企业所得税后的利润率。",
    ],
    text2: [
      "• 应收账款周转率就是反映公司应收账款周转速度的比率，它说明一定期间内公司应收账款转为现金的平均次数。",
      "• 存货周转率说明了一定时期内企业存货周转的次数，可以反映企业存货的变现速度，衡量企业的销售能力及存货是否过量，反映了企业的销售效率和存货使用效率。",
      "• 流动资产周转率反映了在一个会计年度内企业流动资产周转的次数，它反映了流动资产周转的速度。该指标越高，说明企业流动资产的利用效率越高。",
    ],
    text3: [
      "• 主营业务增长率表示与上年相比，主营业务收入的增减变动情况，是评价企业成长状况和发展能力的重要指标。",
      "• 净利润增长率反映了企业实现价值最大化的扩张速度，是综合衡量企业资产运营与管理业绩的指标.",
      "• 净资产增长率反映了企业资本规模的扩张速度，是衡量企业总量规模变动和成长状况的重要指标。",
      "• 总资产增长率是企业本年总资产增长额同年初资产总额的比率，反映企业本期资产规模的增长情况。",
      "• 每股收益增长率是综合反映公司获利能力的重要指标，可以用来判断和评价管理层的经营业绩。",
      "• 股东权益增长率反映的是企业在经过一年经营以后股东权益增长幅度的比率，也称资本积累率。 ",
    ],
    text4: [
      "• 流动比率是衡量企业短期偿债能力的常用指标，反映企业的短期流动性储备状况。",
      "• 速动比率是速动资产和流动负债的比率值，是反映企业短期偿债能力的一个辅助指标。",
      "• 现金比率反映出公司在不依靠存货销售及应收款的情况下，支付当前债务的能力。",
      "• 股东权益比率反映企业长期财务状况 ，股东权益比率越大，资产负债比率就越小，企业财务风险就越小，偿还长期债务的能力就越强。",
      "• 资产负债率反映了在企业的全部资产中由债权人提供的资产所占比重的大小, 反映了债权人向企业提供信贷资金的风险程度, 也反映了企业举债经营的能力。",
    ],
    chart1: "",
    chart2: "",
    chart3: "",
    chart4: "",
  }),
  methods: {
    // getData() {
    //   //综合评分
    //   this.score = 0;
    //   for (let i = 1; i <= 5; i++) {
    //     this.$http
    //       .get(`${this.$target}/stock/calculate_scores/${this.ticker}/${i}`)
    //       .then((res) => {
    //         // console.log(res);
    //         this.score += res.data[0].score;
    //       });
    //   }
    //   this.score = this.score / 5;

    //   //预测值
    //   for (let i = 1; i <= 5; i++) {
    //     this.$http
    //       .get(`${this.$target}/stock/predict/${this.ticker}/${i}`)
    //       .then((res) => {
    //         // console.log(res);
    //         this.date = res.data.future_predictions[0].date;
    //         this.predict[i - 1].value = res.data.future_predictions[0].value;
    //         this.predict[i - 1].nihe = res.data.r_squared;
    //       });
    //   }
    // },
    async getData() {
      var url = `${this.$target}/analyze/inc_analyze/${this.ticker}/1`;
      let that = this;
      this.$http.get(url).then((res) => {
        if (res.data.code != 200) {
          this.$refs.notifyBar.warnNotify(res.data.msg);
        } else {
          this.data1 = res.data.data;
        }
        this.draw1();
      });
      url = `${this.$target}/analyze/inc_analyze/${this.ticker}/2`;
      this.$http.get(url).then((res) => {
        if (res.data.code != 200) {
          this.$refs.notifyBar.warnNotify(res.data.msg);
        } else {
          this.data2 = res.data.data;
        }
        this.draw2();
      });
      url = `${this.$target}/analyze/inc_analyze/${this.ticker}/3`;
      this.$http.get(url).then((res) => {
        if (res.data.code != 200) {
          this.$refs.notifyBar.warnNotify(res.data.msg);
        } else {
          this.data3 = res.data.data;
        }
        this.draw3();
      });
      url = `${this.$target}/analyze/inc_analyze/${this.ticker}/4`;
      this.$http.get(url).then((res) => {
        if (res.data.code != 200) {
          this.$refs.notifyBar.warnNotify(res.data.msg);
        } else {
          this.data4 = res.data.data;
        }
        this.draw4();
      });
      await console.log("Get Data");
    },
    click(num) {
      this.tag = num;
    },
    draw1() {
      console.log(this.data1);
      this.chart1.setOption({
        title: {
          text: "盈利能力",
        },
        tooltip: {
          trigger: "axis",
        },

        radar: {
          // 注意，这里设置的最大值为100，但是实际的情况下可能得到的比率都比较小，为了展示的美观，可以尝试设置最大值为50
          indicator: [
            { text: "净资产收益率", max: 50, min: -50 },
            { text: "毛利率", max: 100, min: -100 },
            { text: "净利率", max: 50, min: -50 },
          ],
        },

        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            areaStyle: {},
            data: [
              {
                value: this.data1,
                name: "盈利能力指标(%)",
              },
            ],
          },
        ],
      });
    },
    draw2() {
      this.chart2.setOption({
        title: {
          text: "运营能力",
        },
        tooltip: {
          trigger: "axis",
        },

        radar: {
          indicator: [
            { text: "应收账款周转率", max: 200, min: -50 },
            { text: "存货周转率", max: 500, min: -50 },
            { text: "流动资产周转率", max: 50, min: -50 },
          ],
        },

        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            areaStyle: {},
            data: [
              {
                value: this.data2,
                name: "运营能力指标/天",
              },
            ],
          },
        ],
      });
    },
    draw3() {
      this.chart3.setOption({
        title: {
          text: "成长能力",
        },
        tooltip: {
          trigger: "axis",
        },

        radar: {
          indicator: [
            { text: "主营业务收入增长率", max: 50, min: -50 },
            { text: "净利润增长率", max: 50, min: -50 },
            { text: "净资产增长率", max: 50, min: -50 },
            { text: "总资产增长率", max: 50, min: -50 },
            { text: "每股收益增长率", max: 50, min: -50 },
            { text: "股东权益增长率", max: 50, min: -50 },
          ],
        },

        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            areaStyle: {},
            data: [
              {
                value: this.data3,
                name: "成长能力指标(%)",
              },
            ],
          },
        ],
      });
    },
    draw4() {
      this.chart4.setOption({
        title: {
          text: "偿债能力",
        },
        tooltip: {
          trigger: "axis",
        },

        radar: {
          indicator: [
            { text: "流动比率", max: 50, min: -50 },
            { text: "速动比率", max: 50, min: -50 },
            { text: "现金比率", max: 400, min: -100 },
            { text: "股东权益比率", max: 200, min: -50 },
            { text: "资产负债率", max: 100, min: -100 },
          ],
        },

        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            areaStyle: {},
            data: [
              {
                value: this.data4,
                name: "成长能力指标(%)",
              },
            ],
          },
        ],
      });
    },
  },
  mounted() {
    var chartDom1 = document.getElementById("a");
    this.chart1 = echarts.init(chartDom1);
    var chartDom2 = document.getElementById("b");
    this.chart2 = echarts.init(chartDom2);
    var chartDom3 = document.getElementById("c");
    this.chart3 = echarts.init(chartDom3);
    var chartDom4 = document.getElementById("d");
    this.chart4 = echarts.init(chartDom4);
    this.getData();
  },
};
</script>
<style scoped>
.btn {
  width: 24%;
  margin-left: 1%;
}

.chart {
  height: 80vh;
  width: 419px;
  margin-top: 20px;
}
</style>
