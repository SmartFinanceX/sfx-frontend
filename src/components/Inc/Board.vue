<template>
    <v-container v-if="this.get1">
        <v-card>
            <v-card-title>
                <v-chip class="ma-2" color="rgb(250,128,114)" label text-color="white">
                    报表信息
                </v-chip>
            </v-card-title>
            <v-container class="d-flex flex-no-wrap justify-space-between">
                <v-card-text>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>股票代码</v-list-item-title>
                            <v-list-item-subtitle>{{ stockData.ticker }}</v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>股票简称</v-list-item-title>
                            <v-list-item-subtitle>{{ stockData.name }}</v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>公告日期</v-list-item-title>
                            <v-list-item-subtitle>{{ stockData.date }}</v-list-item-subtitle>
                        </v-list-item>
                    </v-list>
                </v-card-text>
                <v-dialog width="500">
                    <template v-slot:activator="{ props }">
                        <v-btn color="blue" class="ma-2 white--text" v-bind="props">
                            报表说明
                            <v-icon right color="#2980B9">
                                mdi-chat-question
                            </v-icon>
                        </v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card title="财务报表">
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-typography>
                                                当谈到财务报表时，有三个主要的报表类型是至关重要的：资产负债表、利润表和现金流量表。
                                            </v-typography>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-typography>
                                                资产负债表（或称为财务状况表）提供了关于企业在特定时间点上的资产、负债和所有者权益的快照。它显示了企业所拥有的资源（资产），以及这些资源是通过借款（负债）还是通过投资（所有者权益）获得的。资产负债表帮助投资者、债权人和经营者了解企业的财务健康状况和可持续性。
                                            </v-typography>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-typography>
                                                利润表（或称为损益表）展示了企业在特定会计期间内的收入、成本和利润。它显示了企业的销售收入、减去成本和费用后的净收入。利润表是评估企业盈利能力和经营绩效的关键指标，它帮助投资者和经营者了解企业的盈利情况和潜在的风险。
                                            </v-typography>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-typography>
                                                现金流量表记录了企业在特定会计期间内的现金流动情况。它分为三个主要部分：经营活动现金流量、投资活动现金流量和筹资活动现金流量。现金流量表提供了关于企业从日常运营、投资和筹资活动中获得和使用现金的详细信息。这对于评估企业的现金流动性和偿债能力非常重要。
                                            </v-typography>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </v-container>
        </v-card>
    </v-container>
    <v-container class="d-flex justify-space-around">
        <v-container>
            <v-chip class="ma-2" color="orange" label text-color="white">
                利润表
            </v-chip>
            <v-list v-if="this.get1">

                <v-list-item>
                    <v-list-item-title>净利润(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ stockData.jlr }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>营业总收入(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ stockData.zsr }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>营业总支出(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ stockData.zzc }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>营业支出(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ stockData.yyzc }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>销售费用(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ stockData.xsfy }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>管理费用(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ stockData.glfy }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>财务费用(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ stockData.cwfy }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>营业利润(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ stockData.yylr }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>利润总额(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ stockData.lrze }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>营业总收入同比(%)</v-list-item-title>
                    <v-list-item-subtitle>{{ stockData.yysrtb }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>净利润同比(%)</v-list-item-title>
                    <v-list-item-subtitle>{{ stockData.jlrtb }}</v-list-item-subtitle>
                </v-list-item>
            </v-list>
            <v-container v-else>
                无利润表数据
            </v-container>
        </v-container>
        <v-container>
            <v-chip class="ma-2" color="cyan" label text-color="white">
                资产负债表
            </v-chip>
            <v-list v-if="this.get2">
                <v-list-item>
                    <v-list-item-title>总资产(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ assestData.zzc }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>货币资金(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ assestData.hbzj }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>应收账款(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ assestData.yszk }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>存货(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ assestData.ch }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>总负债(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ assestData.zfz }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>应付账款(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ assestData.yfzk }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>预收账款(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ assestData.yczk }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>股东权益合计(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ assestData.gdqyhj }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>总资产同比(%)</v-list-item-title>
                    <v-list-item-subtitle>{{ assestData.zjctb }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>总负债同比(%)</v-list-item-title>
                    <v-list-item-subtitle>{{ assestData.zfztb }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>资产负债率(%)</v-list-item-title>
                    <v-list-item-subtitle>{{ assestData.zcfjl }}</v-list-item-subtitle>
                </v-list-item>
            </v-list>
            <v-container v-else>
                无资产负债表数据
            </v-container>
        </v-container>
        <v-container>
            <v-chip class="ma-2" color="blue" label text-color="white">
                现金流量表
            </v-chip>
            <v-list v-if="this.get3">

                <v-list-item>
                    <v-list-item-title>现金流量净额(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ moneyData.a }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>净现金流占比(%)</v-list-item-title>
                    <v-list-item-subtitle>{{ moneyData.b }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>现金流量净额(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ moneyData.c }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>净现金流占比(%)</v-list-item-title>
                    <v-list-item-subtitle>{{ moneyData.d }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>现金流量净额(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ moneyData.e }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>净现金流占比(%)</v-list-item-title>
                    <v-list-item-subtitle>{{ moneyData.f }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>净现金流(元)</v-list-item-title>
                    <v-list-item-subtitle>{{ moneyData.g }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>同比增长(%)</v-list-item-title>
                    <v-list-item-subtitle>{{ moneyData.h }}</v-list-item-subtitle>
                </v-list-item>
            </v-list>
            <v-container v-else>
                无现金流量数据
            </v-container>
        </v-container>
    </v-container>
</template>
<script>
export default {
    props: {
        ticker: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            stockData: null,
            stockData2: null,
            moneyData: null,
            get1: false,
            get2: false,
            get3: false,
            sm: false,
            dialog: false,
        };
    },
    methods: {
        fetchStockData() {
            const url = `${this.$target}/inc/profit/${this.ticker}`;

            this.$http.get(url)
                .then(response => {
                    const { code, msg, data } = response.data;

                    if (code !== 200) {
                        this.stockData = [];
                        this.cnt = 0;
                    } else {
                        this.get1 = true
                        console.log(data)
                        this.stockData = data;
                        this.cnt = msg;
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchAssestData() {
            const url = `${this.$target}/inc/assets/${this.ticker}`;

            this.$http.get(url)
                .then(response => {
                    const { code, msg, data } = response.data;

                    if (code !== 200) {
                        this.assestData = [];
                        this.cnt = 0;
                    } else {
                        this.get2 = true

                        this.assestData = data;
                        this.cnt = msg;
                        console.log(this.assestData)
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchMoneyData() {
            const url = `${this.$target}/inc/money/${this.ticker}`;

            this.$http.get(url)
                .then(response => {
                    const { code, msg, data } = response.data;

                    if (code !== 200) {
                        this.moneyData = [];
                        this.cnt = 0;
                    } else {
                        this.get3 = true

                        this.moneyData = data;
                        this.cnt = msg;
                        console.log(this.moneyData)
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        this.fetchStockData();
        this.fetchAssestData();
        this.fetchMoneyData();
    },
}
</script>