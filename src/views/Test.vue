<template>
  <v-container class="flex-column">
    <v-container class="d-flex elevation-0">
      <v-container class="elevation-2">
        <v-list lines="two">
          <v-list-item title="综合评分：">
            <div style="width: 100%; height: 400px">
              <score></score>
            </div>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item title="预测值:">
            <v-card-text style="text-align: center"
              >预计在2023年10月16日，以0.86的拟合程度，公司的净利润将会达到80000000元</v-card-text
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

          <div
            v-show="tag == 1"
            id="a"
            style="height: 80vh; width: 100%; margin-top: 20px"
          ></div>
          <div
            v-show="tag == 2"
            id="b"
            style="height: 80vh; width: 100%; margin-top: 20px"
          ></div>
          <div
            v-show="tag == 3"
            id="c"
            style="height: 80vh; width: 100%; margin-top: 20px"
          ></div>
          <div
            v-show="tag == 4"
            id="d"
            style="height: 80vh; width: 100%; margin-top: 20px"
          ></div>
        </v-container>
      </v-container>
    </v-container>
  </v-container>
</template>
<script setup></script>
<script>
import Score from "@/components/Inc/Score.vue";
import * as echarts from "echarts";
export default {
  components: {
    Score,
  },
  data: () => ({
    ticker: "000001",
    tab: null,
    tag: 1,
  }),
  mounted() {
    this.draw1();
    this.draw2();
    this.draw3();
    this.draw4();
  },
  methods: {
    click(num) {
      this.tag = num;
    },
    draw1() {
      var chartDom = document.getElementById("a");
      echarts.init(chartDom).setOption({
        title: {
          text: "盈利能力",
        },
        tooltip: {
          trigger: "axis",
        },

        radar: {
          indicator: [
            { text: "净资产收益率", max: 100 },
            { text: "毛利率", max: 100 },
            { text: "净利率", max: 100 },
          ],
        },

        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            data: [
              {
                value: [60, 73, 85],
                name: "盈利能力指标(%)",
              },
            ],
          },
        ],
      });
    },
    draw2() {
      var chartDom = document.getElementById("b");
      echarts.init(chartDom).setOption({
        title: {
          text: "运营能力",
        },
        tooltip: {
          trigger: "axis",
        },

        radar: {
          indicator: [
            { text: "应收账款周转率", max: 100 },
            { text: "存货周转率", max: 100 },
            { text: "流动资产周转率", max: 100 },
          ],
        },

        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            data: [
              {
                value: [34, 78, 45],
                name: "运营能力指标(%)",
              },
            ],
          },
        ],
      });
    },
    draw3() {
      var chartDom = document.getElementById("c");
      echarts.init(chartDom).setOption({
        title: {
          text: "成长能力",
        },
        tooltip: {
          trigger: "axis",
        },

        radar: {
          indicator: [
            { text: "主营业务收入增长率", max: 100 },
            { text: "净利润增长率", max: 100 },
            { text: "净资产增长率", max: 100 },
            { text: "总资产增长率", max: 100 },
            { text: "每股收益增长率", max: 100 },
            { text: "股东权益增长率", max: 100 },
          ],
        },

        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            data: [
              {
                value: [60, 73, 85, 32, 12, 86],
                name: "成长能力指标(%)",
              },
            ],
          },
        ],
      });
    },
    draw4() {
      var chartDom = document.getElementById("d");
      echarts.init(chartDom).setOption({
        title: {
          text: "偿债能力",
        },
        tooltip: {
          trigger: "axis",
        },

        radar: {
          indicator: [
            { text: "流动比率", max: 100 },
            { text: "速动比率", max: 100 },
            { text: "现金比率", max: 100 },
            { text: "股东权益比率", max: 100 },
            { text: "资产负债率", max: 100 },
          ],
        },

        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            data: [
              {
                value: [60, 73, 32, 12, 86],
                name: "成长能力指标(%)",
              },
            ],
          },
        ],
      });
    },
  },
};
</script>
<style scoped>
.btn {
  width: 24%;
  margin-left: 1%;
}
</style>
