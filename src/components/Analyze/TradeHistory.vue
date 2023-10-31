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
            <v-table class="elevation-2">
                <thead class="elevation-2">
                    <tr>
                        <th class="text-center">
                            成交价格
                        </th>
                        <th class="text-center">
                            买入/卖出
                        </th>
                        <th class="text-center">
                            交易时间
                        </th>
                        <th class="text-center">
                            交易单位量
                        </th>
                        <th class="text-center">
                            总手续费
                        </th>
                        <th class="text-center">
                            总成交金额
                        </th>
                    </tr>
                </thead>
                <tbody class="elevation-1">
                    <tr v-for="item in this.tradeHistory">
                        <td>{{ item.price }}</td>
                        <td>
                            <span v-if="item.tp === 1">买入</span>
                            <span v-else-if="item.tp === 2">卖出</span>
                        </td>

                        <td>{{ item.time }}</td>
                        <td>{{ item.num }}</td>
                        <td>{{ item.fee }}</td>
                        <td>{{ item.totalPrice }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-container>
    </v-container>
    <notify ref="notifyBar"></notify>
</template>
<script setup>
import notify from "@/components/common/notify"
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
            tradeHistory: [],
            ownNum: 0,
            totalCost: 0,
            priceCost: 0,
            recordNum: 0,
        };
    },

    methods: {
        echartsInit() {
            var chartDom = document.getElementById("a");
            echarts.init(chartDom).setOption({
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
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                                value: [7, 9, 5, 6, 5, 2],
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
                console.log(res.data)
                if (res.data.code == "200") {
                    this.tradeHistory = res.data.data.records
                    this.totalCost = res.data.data.totalCost
                    this.priceCost = res.data.data.priceCost
                    this.ownNum = res.data.data.ownNum
                    this.$refs.notifyBar.successNotify("查询历史交易成功")
                    this.recordNum = this.tradeHistory.length
                } else {
                    this.$refs.notifyBar.warnNotify(res.data.msg)
                }
            })
                .catch((error) => {
                    console.error("Error fetching information:", error);
                });
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