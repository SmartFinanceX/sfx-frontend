<template>
    <v-container class="flex-column">
        <v-container class="d-flex elevation-0">
            <v-container class="elevation-2">
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">
                                统计量
                            </th>
                            <th class="text-left">
                                统计数据
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.calories }}</td>
                        </tr> -->
                        <tr>
                            <td>交易记录数</td>
                            <td>{{ recordNum }}</td>
                        </tr>
                        <tr>
                            <td>库存股票数量</td>
                            <td>{{ ownNum }}</td>
                        </tr>
                        <tr>
                            <td>库存股票总成本</td>
                            <td>{{ totalCost }}</td>
                        </tr>
                        <tr>
                            <td>单位成本价</td>
                            <td>{{ priceCost }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-container>
            <v-container class="elevation-2">
                <div id="a" style="height:80vh;width:100%"></div>
            </v-container>
        </v-container>
        <v-container>
            <v-card flat>
                <v-card-title class="d-flex align-center pe-2" style="font-weight: 900">
                    <v-icon icon="mdi-history"></v-icon> &nbsp; 我的交易记录

                    <v-spacer></v-spacer>
                    <v-chip prepend-icon="mdi-refresh" @click="getTradeHisroty()">刷新数据</v-chip>
                </v-card-title>

                <v-divider></v-divider>
                <v-data-table v-model:sort-by="sortBy" :headers="headers" :items="this.tradeHistory" :search="search"
                    :items-per-page="10" loading-text="数据加载中..." no-data-text="你还暂时没有记录交易..." items-per-page-text="每页显示数量"
                    density="comfortable" sort-by="['num']">
                    <template v-slot:item.ticker="{ value }">
                        <v-chip @click="click(value)">{{ value }}</v-chip>
                    </template>
                    <template v-slot:item.tp="{ value }">
                        <v-chip :color="getColor(value)">
                            <span v-if="value === 1">买入</span>
                            <span v-else-if="value === 2">卖出</span></v-chip>
                    </template>
                </v-data-table>
            </v-card>
        </v-container>
    </v-container>
    <notify ref="notifyBar"></notify>
</template>
<script setup>
import notify from "@/components/common/notify";
import router from "@/router";
import { VDataTable } from "vuetify/labs/components";
import * as echarts from "echarts";
</script>

<script>
export default {

    props: {
        ticker: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            default: "1"
        }
    },
    data() {
        return {
            sortBy: [{ key: 'time', order: 'desc' }],
            tradeHistory: [],
            ownNum: 0,
            totalCost: 0,
            priceCost: 0,
            recordNum: 0,
            search: "",
            headers: [
                { align: "start", key: "price", title: "成交价格" },
                { key: "tp", title: "交易类型" },
                { key: "time", title: "交易时间" },
                { key: "num", title: "交易单位量" },
                { key: "fee", title: "总手续费" },
                { key: "totalPrice", title: "总成交金额" },
            ],
            chart: null,
            style: [0, 0, 0, 0, 0, 0],
        };
    },

    methods: {
        echartsInit() {
            var chartDom = document.getElementById("a");
            this.chart = echarts.init(chartDom);
            this.chart.setOption({
                title: {
                    text: '个人交易风格',
                    subtitle: this.ticker
                },
                radar: {
                    // shape: 'circle',
                    indicator: [
                        { name: '谨慎稳健', max: 10 },
                        { name: '灵活机动', max: 10 },
                        { name: '精确决断', max: 10 },
                        { name: '策略周全', max: 10 },
                        { name: '长远眼光', max: 10 },
                        { name: '纪律执行', max: 10 },
                    ]
                },
                series: [
                    {
                        name: '个人风格分析',
                        type: 'radar',
                        data: [
                            {
                                value: this.style,
                                name: 'Allocated Budget'
                            },
                        ]
                    }
                ]
            })
        },
        getTradeHisroty() {
            var requestUrl = '/api/analyze/benefit/query_by_user/' + this.userId + "/" + this.ticker;

            this.$http.get(requestUrl).then((res) => {
                if (res.data.code == "200") {
                    this.tradeHistory = res.data.data.records
                    this.totalCost = res.data.data.totalCost
                    this.priceCost = res.data.data.priceCost
                    this.ownNum = res.data.data.ownNum
                    this.$refs.notifyBar.successNotify("查询历史交易成功")
                    this.recordNum = this.tradeHistory.length
                    console.log(this.recordNum)
                    if (this.recordNum != 0) {
                        this.redraw();
                    }
                } else {
                    this.$refs.notifyBar.warnNotify(res.data.msg)
                }
            })
                .catch((error) => {
                    console.error("Error fetching information:", error);
                });
        },
        click(ticker) {
            router.push({
                path: "/inc/" + ticker,
            });
        },
        getColor(value) {
            // console.log(data);
            if (value == 1) return "red";
            else if (value == 2) return "green";
            else return "black";
        },// 生成一个包含六个随机数的数组
        generateRandomArray() {
            const array = [];
            for (let i = 0; i < 6; i++) {
                const randomNumber = Math.floor(Math.random() * 10) + 1;
                array.push(randomNumber);
            }
            return array;
        },
        redraw() {

            this.style = this.generateRandomArray();
            var option = {
                title: {
                    text: '个人交易风格',
                    subtitle: this.ticker
                },
                radar: {
                    // shape: 'circle',
                    indicator: [
                        { name: '谨慎稳健', max: 10 },
                        { name: '灵活机动', max: 10 },
                        { name: '精确决断', max: 10 },
                        { name: '策略周全', max: 10 },
                        { name: '长远眼光', max: 10 },
                        { name: '纪律执行', max: 10 },
                    ]
                },
                series: [
                    {
                        name: '个人风格分析',
                        type: 'radar',
                        data: [
                            {
                                value: this.style,
                                name: 'Allocated Budget'
                            },
                        ]
                    },
                ]
            }
            console.log(this.style)
            this.chart.setOption(option)
        }
    },
    created() {
        this.getTradeHisroty()

    },
    mounted() {
        this.echartsInit()
    }
}
</script>