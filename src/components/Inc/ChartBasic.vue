<template>
  <div class="frame">
    <div
      class="mychart"
      id="mainchart"
      style="width: 700px; height: 400px"
    ></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  props: {
    chartdata: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.draw(this.chartdata);
  },
  watch: {
    chartdata: {
      handler(newdata, olddata) {
        console.debug("Newdata");
        console.log(newdata);
        this.draw(newdata);
      },
      deep: true,
    },
  },
  methods: {
    //画公司价值图
    draw(data) {
      var chartDom = document.getElementById("mainchart");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "公司市值变化",
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            // 自定义tooltip内容
            var text = "";
            params.forEach(function (param) {
              var date = param.name;
              var value = param.value;
              text += date + "<br/>" + "市值：" + value * 1000000 + "<br/>";
            });
            return text;
          },
        },
        xAxis: {
          type: "category",
          // data: data.value.map((d) => d.date),
          data: data && data.value ? data.value.map((d) => d.date) : [], // 添加防御性处理
        },
        yAxis: {
          name: "10^6",
          type: "value",
        },
        series: [
          {
            name: "市值",
            // data: data.value.map((d) => d.value / 1000000),
            data:
              data && data.value
                ? data.value.map((d) => d.value / 1000000)
                : [], // 添加防御性处理
            type: "line",
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.frame {
  width: 930px;
  height: 400px;
}
/* .mychart {
    display: inline-block;
  } */
</style>
