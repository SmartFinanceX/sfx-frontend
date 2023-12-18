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
  <v-container>
    <v-card class="mx-auto" max-width="800">
      <v-list lines="two">
        <v-list-item title="综合评分：">
          <v-card-title style="text-align: center">1.86</v-card-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="预测值:">
          <v-card-title style="text-align: center"
            >预计在mingtian，以1的拟合程度，公司的jingliyun将会达到100</v-card-title
          >
          <v-card-subtitle
            >基于该公司历史数据，我们得到该公司目前的预测值。</v-card-subtitle
          >
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-card>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
          <v-tab value="one">盈利能力</v-tab>
          <v-tab value="two">运营能力</v-tab>
          <v-tab value="three">成长能力</v-tab>
          <v-tab value="four">偿债能力</v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
              <v-list-item title="净资产收益率:">
                <v-card-title style="text-align: center">11%</v-card-title>
                <v-card-text class="text"
                  >净资产收益率（ROE）是衡量上市公司盈利能力的重要指标。净资产收益率反映股东权益
                  的收益水平，用以衡量公司运用自有资本的效率，指标值越高，收益越高。
                </v-card-text>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item title="毛利率:">
                <v-card-title style="text-align: center">30%</v-card-title>
                <v-card-text class="text"
                  >毛利率反映产品的成本与收入的关系，可以做为公司衡量一个商品是否值得继续贩售的指标，
                  同时反映公司是否做好成本控制。
                </v-card-text>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item title="净利率:">
                <v-card-title style="text-align: center">13%</v-card-title>
                <v-card-text class="text"
                  >净利率是反映企业盈利能力的另外一项重要的财务指标，等于净利润与营业收入的比率，
                  是收入扣除所有成本、费用和企业所得税后的利润率。
                </v-card-text>
              </v-list-item>
            </v-window-item>

            <v-window-item value="two">
              <v-list-item title="应收账款周转率:">
                <v-card-title style="text-align: center">1%</v-card-title>
                <v-card-text class="text"
                  >应收账款周转率就是反映公司应收账款周转速度的比率，
                  它说明一定期间内公司应收账款转为现金的平均次数。
                </v-card-text>
              </v-list-item>
              <v-list-item title="存货周转率:">
                <v-card-title style="text-align: center">2%</v-card-title>
                <v-card-text class="text"
                  >存货周转率说明了一定时期内企业存货周转的次数，可以反映企业存货的变现速度，
                  衡量企业的销售能力及存货是否过量，反映了企业的销售效率和存货使用效率。
                </v-card-text>
              </v-list-item>
              <v-list-item title="流动资产周转率:">
                <v-card-title style="text-align: center">3%</v-card-title>
                <v-card-text class="text"
                  >流动资产周转率反映了在一个会计年度内企业流动资产周转的次数，它反映了流动资产周转的速度。
                  该指标越高，说明企业流动资产的利用效率越高。
                </v-card-text>
              </v-list-item>
            </v-window-item>

            <v-window-item value="three">
              <v-list-item title="主营业务收入增长率:">
                <v-card-title style="text-align: center">1%</v-card-title>
                <v-card-text class="text">主营业务收入增长率 </v-card-text>
              </v-list-item>
              <v-list-item title="净利润增长率:">
                <v-card-title style="text-align: center">2%</v-card-title>
                <v-card-text class="text">净利润增长率 </v-card-text>
              </v-list-item>
              <v-list-item title="净资产增长率:">
                <v-card-title style="text-align: center">3%</v-card-title>
                <v-card-text class="text">净资产增长率 </v-card-text>
              </v-list-item>
              <v-list-item title="总资产增长率:">
                <v-card-title style="text-align: center">4%</v-card-title>
                <v-card-text class="text">总资产增长率 </v-card-text>
              </v-list-item>
              <v-list-item title="每股收益增长率:">
                <v-card-title style="text-align: center">5%</v-card-title>
                <v-card-text class="text">每股收益增长率 </v-card-text>
              </v-list-item>
              <v-list-item title="股东权益增长率:">
                <v-card-title style="text-align: center">6%</v-card-title>
                <v-card-text class="text">股东权益增长率 </v-card-text>
              </v-list-item>
            </v-window-item>

            <v-window-item value="four">
              <v-list-item title="流动比率:">
                <v-card-title style="text-align: center">1%</v-card-title>
                <v-card-text class="text">流动比率 </v-card-text>
              </v-list-item>
              <v-list-item title="速动比率:">
                <v-card-title style="text-align: center">2%</v-card-title>
                <v-card-text class="text">速动比率 </v-card-text>
              </v-list-item>
              <v-list-item title="现金比率:">
                <v-card-title style="text-align: center">3%</v-card-title>
                <v-card-text class="text">现金比率 </v-card-text>
              </v-list-item>
              <v-list-item title="股东权益比率:">
                <v-card-title style="text-align: center">4%</v-card-title>
                <v-card-text class="text">股东权益比率 </v-card-text>
              </v-list-item>
              <v-list-item title="资产负债率:">
                <v-card-title style="text-align: center">5%</v-card-title>
                <v-card-text class="text">资产负债率 </v-card-text>
              </v-list-item>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>
<script setup></script>
<script>
export default {
  components: {
    // Record
  },
  data: () => ({
    ticker: "000001",
    tab: null,
  }),
};
</script>
<style scoped>
.text {
  opacity: 0.75;
}
</style>
