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
