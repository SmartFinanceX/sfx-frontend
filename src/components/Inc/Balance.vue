<template>
    <v-container class="flex-column">
        <v-container class="d-flex justify-space-around">
            <v-sheet id="balance" :elevation="4" :height="600" :width="900" color="#CCFFFF" rounded>
            </v-sheet>
            <v-sheet id="balance-b" :elevation="4" :height="600" :width="900" color="#FFFFCC" rounded>
            </v-sheet>
        </v-container>
        <v-container class="d-flex justify-space-around">
            <v-sheet id="balance-c" :elevation="4" :height="600" :width="900" color="#66CCCC" rounded>
            </v-sheet>
            <v-sheet id="balance-d" :elevation="4" :height="600" :width="900" color="#99CCFF" rounded>
            </v-sheet>
        </v-container>
    </v-container>
</template>
<script setup>
import * as echarts from 'echarts';

</script>
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
            chart1: null,
        };
    },
    methods: {

        fetchAssestData() {
            var dom = document.getElementById('balance');
            var myChart = echarts.init(dom, null, {
                renderer: 'canvas',
                useDirtyRect: false
            });
            var app = {};

            var option;

            var balanceData = [
                {
                    name: '流动资产',
                    path: '资产',
                    children: [
                        {
                            value: 551638800,
                            name: '货币资金',
                            path: '货币资金'
                        },
                        {
                            name: '交易性金融资产',
                            children: [
                                {
                                    name: '债券投资',
                                    value: 23440800
                                },
                                {
                                    name: '股票投资',
                                    value: 43540800
                                },
                                {
                                    name: '基金投资',
                                    value: 63540800
                                },
                                {
                                    name: '其他投资',
                                    value: 0
                                }
                            ]
                        },
                        {
                            name: '衍生金融资产',
                            children: [
                                {
                                    name: '贵金属远期合约',
                                    value: 12000000
                                },
                                {
                                    name: '商品远期合约',
                                    value: 35000000
                                },
                                {
                                    name: '其他衍生工具',
                                    value: 32000000
                                }
                            ]
                        },
                        {
                            name: '应收票据',
                            value: 6542000
                        },
                        {
                            name: '应收账款',
                            value: 45234500
                        },
                        {
                            name: '应收款项融资',
                            value: 123400
                        },
                        {
                            name: '预付账款',
                            value: 5643300
                        },
                        {
                            name: '其他应收款',
                            value: 555000
                        },
                        {
                            name: '存货',
                            value: 4500000
                        },
                        {
                            name: '合同资产',
                            value: 21312000
                        },
                        {
                            name: '持有待售资产',
                            value: 60000
                        }
                    ]
                },
                {
                    name: '非流动资产',
                    children: [
                        {
                            name: '债权投资',
                            value: 23330000
                        },
                        {
                            name: '其他债权投资',
                            value: 10000000
                        },
                        {
                            name: '长期应收款',
                            value: 123440000
                        },
                        {
                            name: '长期股权投资',
                            value: 95400000
                        },
                        {
                            name: '其他权益工具投资',
                            value: 54900000
                        },
                        {
                            name: '其他非流动性金融资产',
                            value: 5400000
                        },
                        {
                            name: '在建工程',
                            value: 32130000
                        },
                        {
                            name: '固定资产',
                            children: [
                                {
                                    name: '房屋和建筑物',
                                    value: 213350000
                                },
                                {
                                    name: '一般办公设备',
                                    value: 65000000
                                },
                                {
                                    name: '专用设备',
                                    value: 5434000
                                },
                                {
                                    name: '机械设备',
                                    value: 45443299
                                },
                                {
                                    name: '其他固定资产',
                                    value: 23323299
                                }
                            ]
                        }
                    ]
                }
            ];
            function getLevelOption() {
                return [
                    {
                        itemStyle: {
                            borderColor: '#777',
                            borderWidth: 0,
                            gapWidth: 1
                        },
                        upperLabel: {
                            show: true
                        }
                    },
                    {
                        itemStyle: {
                            borderColor: '#555',
                            borderWidth: 5,
                            gapWidth: 1
                        },
                        emphasis: {
                            itemStyle: {
                                borderColor: '#ddd'
                            }
                        },
                    },
                    {
                        colorSaturation: [0.35, 0.5],
                        itemStyle: {
                            borderWidth: 5,
                            gapWidth: 1,
                            borderColorSaturation: 0.6
                        }
                    }
                ];
            }
            myChart.setOption(
                (option = {
                    title: {
                        text: '资产负债分析',
                        left: 'center'
                    },
                    tooltip: {
                        formatter: function (info) {
                            var value = info.value;
                            var treePathInfo = info.treePathInfo;
                            var treePath = [];
                            for (var i = 1; i < treePathInfo.length; i++) {
                                treePath.push(treePathInfo[i].name);
                            }
                            return [
                                '<div class="tooltip-title">' +
                                echarts.format.encodeHTML(treePath.join('/')) +
                                '</div>',
                                '总值 ' + echarts.format.addCommas(value) + ' 元'
                            ].join('');
                        }
                    },
                    series: [
                        {
                            name: '资产分析',
                            type: 'treemap',
                            visibleMin: 0,
                            label: {
                                show: true,
                                formatter: '{b}'
                            },
                            upperLabel: {
                                show: true,
                                height: 40
                            },
                            itemStyle: {
                                borderColor: '#fff'
                            },
                            levels: getLevelOption(),
                            data: balanceData
                        }
                    ]
                })
            );


            if (option && typeof option === 'object') {
                myChart.setOption(option);
            }

            window.addEventListener('resize', myChart.resize);
            var dom2 = document.getElementById('balance-c');
            var myChart2 = echarts.init(dom2, null, {
                renderer: 'canvas',
                useDirtyRect: false
            });
            myChart2.setOption(
                (option = {
                    title: {
                        text: '资产分析',
                        left: 'center'
                    },
                    tooltip: {
                        formatter: function (info) {
                            var value = info.value;
                            var treePathInfo = info.treePathInfo;
                            var treePath = [];
                            for (var i = 1; i < treePathInfo.length; i++) {
                                treePath.push(treePathInfo[i].name);
                            }
                            return [
                                '<div class="tooltip-title">' +
                                echarts.format.encodeHTML(treePath.join('/')) +
                                '</div>',
                                '总值 ' + echarts.format.addCommas(value) + ' 元'
                            ].join('');
                        }
                    },
                    visualMap: {
                        type: 'continuous',
                        min: 0,
                        max: 3000000000,
                        inRange: {
                            color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
                        }
                    },
                    series: [
                        {
                            name: '资产',
                            type: 'sunburst',
                            visibleMin: 300,
                            label: {
                                show: true,
                                formatter: '{b}',
                                rotate: 0,
                            },
                            upperLabel: {
                                show: true,
                                height: 40
                            },
                            itemStyle: {
                                borderColor: '#fff'
                            },
                            levels: [
                                {},
                                {
                                    r0: '15%',
                                    r: '35%',
                                    itemStyle: {
                                        borderWidth: 2
                                    },
                                    label: {
                                        rotate: 'tangential'
                                    }
                                },
                                {
                                    r0: '35%',
                                    r: '70%',
                                    label: {
                                        align: 'right'
                                    }
                                },
                                {
                                    r0: '70%',
                                    r: '72%',
                                    label: {
                                        position: 'outside',
                                        padding: 3,
                                        silent: false
                                    },
                                    itemStyle: {
                                        borderWidth: 3
                                    }
                                }
                            ],
                            data: balanceData
                        }
                    ]
                })
            );

        },
        fetchAssestData2() {
            var dom = document.getElementById('balance-b');
            var myChart = echarts.init(dom, null, {
                renderer: 'canvas',
                useDirtyRect: false
            });
            var app = {};

            var option;

            var balanceData = [
                {
                    "name": "负债",
                    "children": [
                        {
                            "name": "流动负债",
                            "children": [
                                {
                                    "name": "短期借款",
                                    "value": 120000000
                                },
                                {
                                    "name": "交易性金融资产",
                                    "value": 80000000
                                },
                                {
                                    "name": "衍生化金融负债",
                                    "value": 125000000
                                },
                                {
                                    "name": "应付票据",
                                    "value": 75000000
                                },
                                {
                                    "name": "应付账款",
                                    "value": 1000000
                                },
                                {
                                    "name": "预收款项",
                                    "value": 16900000
                                },
                                {
                                    "name": "合同负债",
                                    "value": 50000000
                                },
                                {
                                    "name": "应付职工薪酬",
                                    "value": 43430000
                                },
                                {
                                    "name": "应交税费",
                                    "value": 555550000
                                },
                                {
                                    "name": "其他应付款",
                                    "value": 234341299
                                },
                                {
                                    "name": "其他流动负债",
                                    "value": 53400000
                                }
                            ]
                        },
                        {
                            "name": "非流动负债",
                            "children": [
                                {
                                    "name": "长期借款",
                                    "value": 180000000
                                },
                                {
                                    "name": "应付债券",
                                    "children": [
                                        {
                                            "name": "优先股",
                                            "value": 10000000
                                        },
                                        {
                                            "name": "永续股",
                                            "value": 100000000
                                        }
                                    ]
                                },
                                {
                                    "name": "租赁负债",
                                    "value": 543500000
                                },
                                {
                                    "name": "长期应付款",
                                    "value": 44440000
                                },
                                {
                                    "name": "预计负债",
                                    "value": 213130000
                                },
                                {
                                    "name": "递延收益",
                                    "value": 1420000
                                },
                                {
                                    "name": "递延所得税负债",
                                    "value": 134240000
                                },
                                {
                                    "name": "其他非流动负债",
                                    "value": 1233300
                                }
                            ]
                        },

                    ]
                },
                {
                    "name": "所有者权益",
                    "children": [
                        {
                            "name": "实收股本",
                            "value": 542344000
                        },
                        {
                            "name": "其他权益工具",
                            "children": [
                                {
                                    "name": "优先股",
                                    "value": 134310000
                                },
                                {
                                    "name": "永续股",
                                    "value": 344400000
                                }
                            ]
                        },
                        {
                            "name": "资本公积",
                            "value": 11300000
                        },
                        {
                            "name": "盈余公积",
                            "value": 77643000
                        }
                    ]
                }
            ];
            function getLevelOption() {
                return [
                    {
                        itemStyle: {
                            borderColor: '#777',
                            borderWidth: 0,
                            gapWidth: 1
                        },
                        upperLabel: {
                            show: true
                        },
                        color: [
                            "#516b91",
                            "#59c4e6",
                            "#edafda",
                            "#93b7e3",
                            "#a5e7f0",
                            "#cbb0e3"
                        ]
                    },
                    {
                        itemStyle: {
                            borderColor: '#555',
                            borderWidth: 5,
                            gapWidth: 1
                        },
                        upperLabel: {
                            show: true
                        },
                        color: [
                            "#516b91",
                            "#59c4e6",
                            "#edafda",
                            "#93b7e3",
                            "#a5e7f0",
                            "#cbb0e3"
                        ]
                    },
                    {
                        colorSaturation: [0.35, 0.5],
                        itemStyle: {
                            borderWidth: 5,
                            gapWidth: 1,
                            borderColorSaturation: 0.6
                        },
                        upperLabel: {
                            show: true
                        },
                        color: [
                            "#c1232b",
                            "#27727b",
                            "#fcce10",
                            "#e87c25",
                            "#b5c334",
                        ]
                    },
                    {
                        colorSaturation: [0.35, 0.5],
                        itemStyle: {
                            borderWidth: 5,
                            gapWidth: 1,
                            borderColorSaturation: 0.6
                        },
                        upperLabel: {
                            show: true
                        },
                        color: [
                            '#43A047',
                            '#388E3C',
                            '#2E7D32',
                        ]
                    }
                ];
            }
            myChart.setOption(
                (option = {
                    title: {
                        text: '负债与所有者权益',
                        left: 'center'
                    },
                    tooltip: {
                        formatter: function (info) {
                            var value = info.value;
                            var treePathInfo = info.treePathInfo;
                            var treePath = [];
                            for (var i = 1; i < treePathInfo.length; i++) {
                                treePath.push(treePathInfo[i].name);
                            }
                            return [
                                '<div class="tooltip-title">' +
                                echarts.format.encodeHTML(treePath.join('/')) +
                                '</div>',
                                '总值 ' + echarts.format.addCommas(value) + ' 元'
                            ].join('');
                        }
                    },
                    series: [
                        {
                            name: '负债与所有者权益',
                            type: 'treemap',
                            visibleMin: 300,
                            label: {
                                show: true,
                                formatter: '{b}'
                            },
                            upperLabel: {
                                show: true,
                                height: 40
                            },
                            itemStyle: {
                                borderColor: '#fff'
                            },
                            levels: getLevelOption(),
                            data: balanceData
                        }
                    ]
                })
            );


            if (option && typeof option === 'object') {
                myChart.setOption(option);
            }

            window.addEventListener('resize', myChart.resize);

            var dom2 = document.getElementById('balance-d');
            var myChart2 = echarts.init(dom2, null, {
                renderer: 'canvas',
                useDirtyRect: false
            });
            myChart2.setOption(
                (option = {
                    title: {
                        text: '负债与所有者权益',
                        left: 'center'
                    },
                    tooltip: {
                        formatter: function (info) {
                            var value = info.value;
                            var treePathInfo = info.treePathInfo;
                            var treePath = [];
                            for (var i = 1; i < treePathInfo.length; i++) {
                                treePath.push(treePathInfo[i].name);
                            }
                            return [
                                '<div class="tooltip-title">' +
                                echarts.format.encodeHTML(treePath.join('/')) +
                                '</div>',
                                '总值 ' + echarts.format.addCommas(value) + ' 元'
                            ].join('');
                        }
                    },
                    visualMap: {
                        type: 'continuous',
                        min: 0,
                        max: 3000000000,
                        inRange: {
                            color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
                        }
                    },
                    series: [
                        {
                            name: '负债与所有者权益',
                            type: 'sunburst',
                            visibleMin: 300,
                            label: {
                                show: true,
                                formatter: '{b}',
                                rotate: 0,
                            },
                            upperLabel: {
                                show: true,
                                height: 40
                            },
                            itemStyle: {
                                borderColor: '#fff'
                            },
                            levels: [
                                {},
                                {
                                    r0: '15%',
                                    r: '35%',
                                    itemStyle: {
                                        borderWidth: 2
                                    },
                                    label: {
                                        rotate: 'tangential'
                                    }
                                },
                                {
                                    r0: '35%',
                                    r: '70%',
                                    label: {
                                        align: 'right'
                                    }
                                },
                                {
                                    r0: '70%',
                                    r: '72%',
                                    label: {
                                        position: 'outside',
                                        padding: 3,
                                        silent: false
                                    },
                                    itemStyle: {
                                        borderWidth: 3
                                    }
                                }
                            ],
                            data: balanceData
                        }
                    ]
                })
            );

        },
    },
    mounted() {
        this.fetchAssestData();
        this.fetchAssestData2();
    },
}
</script>
