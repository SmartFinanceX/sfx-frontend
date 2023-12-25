<template>
  <div>
    <div id="timely-price" style="max-width: 1000px; height: 500px"></div>
  </div>
</template>

<script steup></script>
<script>
import * as echarts from "echarts";
export default {
  props: {
    // ticker: {
    //   type: String,
    //   required: true,
    // },
  },
  data() {
    return {};
  },
  methods: {
    drow() {
      // 获取dom
      const box = document.getElementById("timely-price");
      const charts = echarts.init(box);
      let htmlfontsize = 16;
      function fontsizes(res) {
        var fffont = htmlfontsize;
        // console.log(fffont)
        fffont = parseFloat(fffont);
        return res * fffont;
      }
      console.log("TimelyPrice")
      //样例数据
      const res = {
        data: [
          {
            close: 3592.38, //最新价
            high: 3593.88, //最高价
            low: 3590.87, //最低价
            money: 12686632781.5, //成交量
            open: 3590.92, //开盘价
            time: "2021-01-21 09:31", //时间
            volume: 1010254100, //成交量
          },
          {
            close: 3592.64,
            high: 3594.12,
            low: 3591.18,
            money: 12686632822.3,
            open: 3591.94,
            time: "2021-01-21 09:32",
            volume: 1010254123,
          },
          {
            close: 3593.58,
            high: 3594.76,
            low: 3592.45,
            money: 12686632858.7,
            open: 3592.89,
            time: "2021-01-21 09:33",
            volume: 1010254154,
          },
          {
            close: 3593.12,
            high: 3595.01,
            low: 3592.02,
            money: 12686632890.1,
            open: 3593.51,
            time: "2021-01-21 09:34",
            volume: 1010254185,
          },
          {
            close: 3593.0,
            high: 3595.7,
            low: 3592.65,
            money: 12686632910.2,
            open: 3593.55,
            time: "2021-01-21 09:35",
            volume: 1010254210,
          },
          {
            close: 3594.2,
            high: 3596.15,
            low: 3593.05,
            money: 12686632935.4,
            open: 3594.1,
            time: "2021-01-21 09:36",
            volume: 1010254235,
          },
          {
            close: 3594.58,
            high: 3596.78,
            low: 3593.5,
            money: 12686632960.7,
            open: 3594.35,
            time: "2021-01-21 09:37",
            volume: 1010254260,
          },
          {
            close: 3594.98,
            high: 3597.0,
            low: 3593.8,
            money: 12686632980.9,
            open: 3594.75,
            time: "2021-01-21 09:38",
            volume: 1010254285,
          },
          {
            close: 3595.3,
            high: 3597.25,
            low: 3594.2,
            money: 12686633010.3,
            open: 3595.0,
            time: "2021-01-21 09:39",
            volume: 1010254310,
          },
          {
            close: 3595.75,
            high: 3597.6,
            low: 3594.5,
            money: 12686633040.8,
            open: 3595.45,
            time: "2021-01-21 09:40",
            volume: 1010254335,
          },
          {
            close: 3596.12,
            high: 3597.95,
            low: 3594.85,
            money: 12686633070.2,
            open: 3595.9,
            time: "2021-01-21 09:41",
            volume: 1010254360,
          },
          {
            close: 3596.35,
            high: 3598.2,
            low: 3595.05,
            money: 12686633099.6,
            open: 3596.15,
            time: "2021-01-21 09:42",
            volume: 1010254385,
          },
          {
            close: 3596.85,
            high: 3598.7,
            low: 3595.5,
            money: 12686633158.3,
            open: 3596.65,
            time: "2021-01-21 09:43",
            volume: 1010254435,
          },
          {
            close: 3596.58,
            high: 3598.43,
            low: 3595.25,
            money: 12686633128.9,
            open: 3596.4,
            time: "2021-01-21 09:44",
            volume: 1010254410,
          },

          {
            close: 3597.12,
            high: 3598.98,
            low: 3595.75,
            money: 12686633187.6,
            open: 3596.92,
            time: "2021-01-21 09:45",
            volume: 1010254460,
          },
          {
            close: 3597.95,
            high: 3599.8,
            low: 3596.5,
            money: 12686633275.5,
            open: 3597.75,
            time: "2021-01-21 09:46",
            volume: 1010254535,
          },
          {
            close: 3597.4,
            high: 3599.25,
            low: 3596.0,
            money: 12686633216.8,
            open: 3597.2,
            time: "2021-01-21 09:47",
            volume: 1010254485,
          },
          {
            close: 3597.68,
            high: 3599.53,
            low: 3596.25,
            money: 12686633246.1,
            open: 3597.48,
            time: "2021-01-21 09:48",
            volume: 1010254510,
          },

          {
            close: 3598.22,
            high: 3600.08,
            low: 3596.8,
            money: 12686633304.8,
            open: 3598.02,
            time: "2021-01-21 09:49",
            volume: 1010254560,
          },
          {
            close: 3598.78,
            high: 3600.63,
            low: 3597.3,
            money: 12686633363.3,
            open: 3598.58,
            time: "2021-01-21 09:50",
            volume: 1010254610,
          },
          {
            close: 3598.5,
            high: 3600.35,
            low: 3597.05,
            money: 12686633334.0,
            open: 3598.3,
            time: "2021-01-21 09:51",
            volume: 1010254585,
          },
        ],
        perClose: 3544.98, //昨收价
      };

      //限制x轴
      function creatX() {
        let onehours = ["09", "10", "11", "13", "14"];
        // let perhours=11
        let min = "";
        let timegroup = [];
        onehours.forEach((item) => {
          if (item == "11") {
            for (let i = 0; i < 30; i++) {
              let str = item + ":" + (i < 10 ? "0" + i : i);
              // console.log()
              timegroup.push(str);
            }
          } else if (item == "09") {
            for (let i = 30; i < 60; i++) {
              let str = item + ":" + i;
              // console.log()
              timegroup.push(str);
            }
          } else {
            for (let i = 0; i < 60; i++) {
              let str = item + ":" + (i < 10 ? "0" + i : i);

              timegroup.push(str);
            }
          }
        });
        timegroup.push("15:00");
        // console.log(timegroup)
        return timegroup;
      }
      let timegroup = creatX();

      //对接收的数据进行处理
      function splitDataMin(rawData, currClose) {
        var values = [];
        var volumes = [];

        let radios = [];
        let zde = [];
        let valueMin = parseFloat(currClose).toFixed(2);
        let valueMax = parseFloat(currClose).toFixed(2);
        let radioMin = 0;
        let radioMax = 0;
        let valueInterval = 0;
        let radioInterval = 0;
        // let lastPoint=[];

        for (var i = 0; i < rawData.length; i++) {
          if (i - 1 >= 0 && rawData[i].time == rawData[i - 1].time) {
            continue;
          }
          let curr = rawData[i].time.split(" ")[1];
          curr = curr.split(":")[0] + ":" + curr.split(":")[1];
          let indx = timegroup.indexOf(curr);
          // // console.log(indx)
          // 		if(rawData[i].close>valueMax){
          // 			valueMax=parseFloat(rawData[i].close).toFixed(2)

          // 		}
          // 		if(rawData[i].close<valueMin){
          // 			valueMin=parseFloat(rawData[i].close).toFixed(2)
          // 		}
          valueMax = Math.max(valueMax, rawData[i].close);
          valueMin = Math.min(valueMin, rawData[i].close);
          let zz = (rawData[i].close - currClose).toFixed(2);
          let rr = (rawData[i].close - currClose) / currClose;
          rr = (rr * 100).toFixed(2);

          radioMin = Math.min(rr, radioMin);
          radioMax = Math.max(rr, radioMax);

          values.push([
            indx,
            rawData[i].close,
            rawData[i].time,
            rawData[i].high,
            rawData[i].low,
            rawData[i].money,
            rawData[i].open,
            zz,
            rr,
          ]); //x,y

          volumes.push([
            indx,
            rawData[i].volume,
            rawData[i].close > rawData[i].open ? 1 : -1,
          ]);
        }

        if (valueMax - currClose > 0 && currClose - valueMin > 0) {
          let a = valueMax - currClose;
          let b = currClose - valueMin;
        }
        valueInterval = (valueMax - valueMin) / 4;
        radioInterval = (radioMax - radioMin) / 4;

        return {
          values: values,
          volumes: volumes,

          valueMax,
          valueMin,
          radioMax,
          radioMin,
          valueInterval,
          radioInterval,
        };
      }

      function getMinOptionData(dataMin, perclose) {
        if (!dataMin || !perclose) {
          return {
            tooltip: {},
            grid: [
              {
                left: "5%",
                right: "5%",
                height: "80%",
                bottom: "10%",
              },
            ],
            xAxis: {
              data: [],
              axisLine: {
                lineStyle: {
                  color: "#838D9E",
                },
              },
            },
            yAxis: {
              axisLine: {
                lineStyle: {
                  color: "#838D9E",
                },
              },
            },
            series: [
              {
                name: "空",
                type: "bar",
                data: [],
              },
            ],
          };
        }
        let data = splitDataMin(dataMin, perclose);
        // console.log(data)
        let averLine = parseFloat(perclose).toFixed(2);
        // console.log(dataMin,perclose)
        var oldParam = {};
        // const _this=this
        // const {Data}=this.state
        let option = {};
        option = {
          backgroundColor: "#ffffff",

          animation: true,
          legend: {
            top: 0,
            left: "center",
            data: [""],
          },
          tooltip: {
            trigger: "axis",

            axisPointer: {
              type: "cross",
            },
            //显示股票详细信息的信息框样式设置
            backgroundColor: "rgba(255,255,255,0.7)",
            borderWidth: 1,
            borderColor: "#ffffff",
            padding: 10,
            textStyle: {
              color: "#6f6f6f",
              fontSize: fontsizes(1.4),
            },
            // position: function (pos, params, el, elRect, size) {
            //   var obj = {
            //     top: 10,
            //   };
            //   obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
            //   return obj;
            // },
            formatter: function (param) {
              // console.log(param)
              let p1, p2;
              param.forEach(function (item) {
                if (item.seriesType == "line") {
                  p1 = item; //分时线
                } else if (item.seriesType == "bar") {
                  p2 = item; //成交量
                }
              });

              function priNum(n) {
                if (n > 100000000) {
                  return (n / 100000000).toFixed(2) + "亿";
                } else if (n > 10000) {
                  return (n / 10000).toFixed(2) + "万";
                } else {
                  return n;
                }
              }
              return [
                '时间:<span style="margin-left:6rem"> ' +
                  p1.data[2] +
                  '</span><hr size=1 style="margin: 3px 0">',
                '最新价:<span style="float:right;color:' +
                  (p1.data[1] > averLine ? "#FF4A4A" : "#3CC864") +
                  '">' +
                  parseFloat(p1.data[1]) +
                  "</span><br/>",
                // '最高价:<span style="float:right;color:' +
                //   (data.values[param.dataIndex][0] > averLine
                //     ? "#FF4A4A"
                //     : "#3CC864") +
                //   '"> ' +
                //   aab0 +
                //   "</span><br/>" +
                //   '最低价:<span style="float:right;color:' +
                //   (data.values[param.dataIndex][1] > averLine
                //     ? "#FF4A4A"
                //     : "#3CC864") +
                //   '"> ' +
                //   aab1 +
                //   "</span><br/>" +
                //   '开盘价:<span style="float:right;color:' +
                //   (data.values[param.dataIndex][3] > averLine
                //     ? "#FF4A4A"
                //     : "#3CC864") +
                //   '"> ' +
                //   aab3 +
                // "</span><br/>" +
                '涨跌额:<span style="float:right;color:' +
                  (Math.ceil(p1.data[7]) > 0 ? "#FF4A4A" : "#3CC864") +
                  '"> ' +
                  p1.data[7] +
                  "</span><br/>" +
                  '涨跌幅:<span style="float:right;color:' +
                  (Math.ceil(p1.data[7]) > 0 ? "#FF4A4A" : "#3CC864") +
                  '"> ' +
                  p1.data[8] +
                  "%</span><br/>" +
                  '成交额:<span style="float:right;"> ' +
                  priNum(p1.data[5]) +
                  "</span><br/>" +
                  '成交量:<span style="float:right"> ' +
                  priNum(p2.data[1]) +
                  "</span><br/>",
              ].join("");
            },
            // extraCssText: "width: 170px",
          },
          axisPointer: {
            link: {
              xAxisIndex: "all",
            },

            label: {
              backgroundColor: "transparent",
              fontSize: fontsizes(1.2),
              // formatter:function(val){

              // }
            },
          },

          visualMap: {
            show: false,
            seriesIndex: 1,
            dimension: 2,
            pieces: [
              {
                value: 1,
                color: "#FF4A4A",
              },
              {
                value: -1,
                color: "#3CC864",
              },
            ],
          },
          grid: [
            {
              left: "15%",
              right: "15%",
              height: "60%",
              bottom: "30%",
            },
            {
              left: "15%",
              right: "15%",
              bottom: "10%",
              height: "20%",
            },
          ],
          xAxis: [
            {
              type: "category",
              data: timegroup,
              boundaryGap: false,
              max: 241,
              // interval:90,
              scale: true,

              axisLine: {
                onZero: false,
                lineStyle: {
                  color: "#303b49",
                },
              },
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              // splitNumber: 20,
              // min: 'dataMin',
              // max: 'dataMax',
              axisPointer: {
                z: 100,
                label: {
                  show: false,
                },
              },
            },
            {
              type: "category",
              gridIndex: 1,
              data: timegroup,
              scale: true,
              max: 241,
              boundaryGap: false,
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: "#838D9E",
                },
              },
              axisTick: {
                lineStyle: {
                  width: fontsizes(0.1),
                },

                // show: false,
                interval: (index, value) => {
                  if (
                    index == 0 ||
                    index == 60 ||
                    index == 120 ||
                    index == 180 ||
                    index == 240
                  ) {
                    return true;
                  }
                },
              },
              axisPointer: {
                z: 100,
                label: {
                  show: false,
                },
              },
              splitLine: {
                show: false,
              },
              axisLabel: {
                interval: 0,
                fontSize: fontsizes(1.2),
                color: "#838D9E",
                formatter: function (value, index) {
                  if (index == 0) {
                    return "9:30";
                  } else if (index == 60) {
                    return "10:30";
                  } else if (index == 120) {
                    return "11:30/13:00";
                  } else if (index == 180) {
                    return "14:00";
                  } else if (index == 240) {
                    return "15:00";
                  } else {
                    return;
                  }
                },
              },
            },
          ],
          yAxis: [
            {
              min: data.valueMin,
              max: data.valueMax,
              // axisPointer: {
              //     type: 'shadow',
              // 	show:false
              // },
              scale: true,
              interval: data.valueInterval,
              splitArea: {
                show: false,
              },

              splitLine: {
                lineStyle: {
                  color: "#303b49",
                },
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisPointer: {
                z: 100,
                label: {
                  backgroundColor: "#ddd",
                  padding: [2, 3],
                  color: "#333",
                  formatter: function (val) {
                    return parseFloat(val.value).toFixed(2);
                  },
                },
              },
              axisLabel: {
                // show:false
                color: "#838D9E",
                formatter: function (value) {
                  // console.log(value)
                  return value.toFixed(2);
                },
                textStyle: {
                  fontSize: fontsizes(1.2),
                  color: function (value, index) {
                    // console.log(value+'----'+averLine)
                    return Math.round(value) > Math.round(averLine)
                      ? "#FF4A4A"
                      : Math.round(value) < Math.round(averLine)
                      ? "#3CC864"
                      : "gray";
                  },
                },
              },
            },

            {
              scale: true,
              gridIndex: 1,
              splitNumber: 2,
              axisLabel: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: false,
              },
              axisPointer: {
                z: 100,
                label: {
                  show: false,
                  backgroundColor: "#ddd",
                  padding: [2, 3],
                  color: "#333",
                  formatter: function (val) {
                    return parseFloat(val.value).toFixed(2);
                  },
                },
              },
            },
            {
              min: data.radioMin,
              max: data.radioMax,
              interval: data.radioInterval,

              gridIndex: 0,
              type: "value",
              name: " ",

              scale: true,
              splitArea: {
                show: false,
              },
              axisPointer: {
                z: 100,
                label: {
                  backgroundColor: "#ddd",
                  padding: [2, 3],
                  color: "#333",
                  formatter: function (val) {
                    return parseFloat(val.value).toFixed(2) + "%";
                  },
                },
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: "#f5f5f5",
                },
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisLabel: {
                fontSize: fontsizes(1.2),
                show: true,
                // interval: 'auto',//居中显示
                textStyle: {
                  color: function (value, index) {
                    return value > 0
                      ? "#FF4A4A"
                      : value < 0
                      ? "#3CC864"
                      : "gray";
                  },
                },
                formatter: function (value) {
                  let text1 = parseFloat(value).toFixed(2) + "%";
                  if (value > 0 || value == 0) {
                    text1 = " " + text1;
                  }
                  return text1;
                },

                //以百分比显示
              },
            },
          ],
          dataZoom: [
            //时间区域
            {
              type: "inside",
              xAxisIndex: [0, 1],
              start: 0,
              end: 100,
              maxSpan: 100,
              minSpan: 100,
              // maxValueSpan:240,
              // minValueSpan:240
            },
            {
              show: false,
              xAxisIndex: [0, 1],
              type: "slider",
              top: "85%",
              start: 0,
              end: 100,
              maxSpan: 100,
              minSpan: 100,
              // maxValueSpan:240,
              // minValueSpan:240
            },
          ],
          series: [
            {
              name: "当前价格",
              type: "line",

              markLine: {
                lineStyle: {
                  color: "gray",
                },
                symbol: "none",
                data: [
                  {
                    name: "Y 轴值为 100 的水平线",
                    yAxis: averLine,
                    label: {
                      show: false,
                      position: "start",
                      backgroundColor: "#DDDDDD",
                      borderRadius: 2,
                      width: "10%",
                      padding: [1, 2],
                      fontSize: fontsizes(1.2),
                      // formatter:"{@[3]}"
                    },
                  },
                  {
                    name: "Y 轴值为 100 的水平线",
                    yAxis: averLine,
                    label: {
                      show: false,
                      position: "end",
                      backgroundColor: "#DDDDDD",
                      borderRadius: 2,
                      width: "10%",
                      padding: [1, 2],
                      fontSize: fontsizes(1.2),
                      formatter: "0.00%",
                    },
                  },
                ],
              },
              markPoint: {
                symbol: "circle",
                symbolSize: 4,
                itemStyle: {
                  borderColor: "#2e91ff",
                  color: "white",
                },
                label: {
                  show: false,
                  position: "top",
                  fontSize: fontsizes(1.2),
                  formatter: function (value) {},
                },
                data: [
                  {
                    type: "max",
                    valueIndex: 0,
                  },
                ],
                animation: true,
                animationEasingUpdate: "bounceIn",
                animationEasing: "bounceIn",
              },
              data: data.values,
              smooth: true,
              symbol: "none",
              lineStyle: {
                opacity: 1,
                width: fontsizes(0.1),
                color: "#1A5C7B", //#50b2f4
              },
              areaStyle: {
                // origin:'start',
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#41658177", // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: "#41658111", // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "transparent", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
            {
              name: "成交量",
              type: "bar",
              barWidth: fontsizes(0.1),
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: data.volumes,
            },
            // {
            //     name: ' ',
            //     type: 'line',
            //     // xAxisIndex: 1,
            //     yAxisIndex:2,
            //     data: data.radios,
            // 	smooth: true,
            // 	 symbol: 'none',
            // 	lineStyle: {
            // 	    opacity: 0
            // 	},

            // },
          ],
        };
        return option;
      }

      charts.setOption(getMinOptionData(res.data, res.perClose));
    },
    // trueTime() {
    //   const currentHour = new Date().getHours();
    //   const currentMinute = new Date().getMinutes();

    //   // 检查当前时间是否在9:30-11:30或13:00-15:00
    //   if (
    //     (currentHour === 9 && currentMinute >= 30) ||
    //     (currentHour === 11 && currentMinute <= 30) ||
    //     (currentHour >= 10 && currentHour < 11) ||
    //     (currentHour >= 13 && currentHour < 15)
    //   ) {
    //     this.drow;
    //   }
    // },
    //     //每分钟请求一次
    // startInterval() {
    //   this.timer = setInterval(this.trueTime, 60000);
    // },
    // stopInterval() {
    //   if (this.timer) {
    //     clearInterval(this.timer);
    //     this.timer = null;
    //   }
    // }
  },
  mounted: function () {
    this.drow(); //需要触发的函数，后面改成用定时器触发

    // this.startInterval();
  },
  // beforeDestroy() {
  //   this.stopInterval();
  // }
};
</script>

<style scoped></style>
