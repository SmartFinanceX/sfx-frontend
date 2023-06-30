<template>
    <v-container>

        <SearchBar>

        </SearchBar>

        <v-list v-for="result in results">
            <v-list-item>
                <v-card :title="result.stockName" :text="result.description"></v-card>
            </v-list-item>
        </v-list>
    </v-container>
</template>
<script setup>
import SearchBar from '@/components/SearchBar';

</script>
<script>
export default {
    name: "SearchView",

    components: {

        // SearchBar: () => import("@/components/SearchBar"),
    },
    data: () => ({
        results: [{
            "ticker": "000723",
            "stockName": "美锦能源",
            "fullName": "山西美锦能源股份有限公司",
            "listDate": "1997-05-14T16:00:00.000+00:00",
            "industryClass": "焦炭",
            "description": "煤炭、焦化、天然气、氢燃料电池汽车为主的新能源汽车等商品的生产销售。"
        },
        {
            "ticker": "603335",
            "stockName": "迪生力",
            "fullName": "广东迪生力汽配股份有限公司",
            "listDate": "2017-06-19T16:00:00.000+00:00",
            "industryClass": "汽车零部件",
            "description": "汽车铝合金轮毂及汽车轮胎、新能源汽车铝合金配件"
        },
        {
            "ticker": "300825",
            "stockName": "阿尔特",
            "fullName": "阿尔特汽车技术股份有限公司",
            "listDate": "2020-03-26T16:00:00.000+00:00",
            "industryClass": "",
            "description": "新能源汽车和燃油汽车全流程研发及其他汽车行业相关的技术服务。"
        },
        {
            "ticker": "002806",
            "stockName": "华锋股份",
            "fullName": "广东华锋新能源科技股份有限公司",
            "listDate": "2016-07-25T16:00:00.000+00:00",
            "industryClass": "电子元件",
            "description": "新能源汽车电控及驱动系统的研发、生产、销售以及技术服务，同时保持电极箔的研发、生产、销售。"
        },
        {
            "ticker": "600478",
            "stockName": "科力远",
            "fullName": "湖南科力远新能源股份有限公司",
            "listDate": "2003-09-17T16:00:00.000+00:00",
            "industryClass": "电池",
            "description": "节能与新能源汽车核心零部件的设计、开发、生产、销售、服务及混合动力总成系统技术服务。"
        },
        {
            "ticker": "000690",
            "stockName": "宝新能源",
            "fullName": "广东宝丽华新能源股份有限公司",
            "listDate": "1997-01-27T16:00:00.000+00:00",
            "industryClass": "火电",
            "description": "新能源发电、金融投资。"
        },
        {
            "ticker": "002434",
            "stockName": "万里扬",
            "fullName": "浙江万里扬股份有限公司",
            "listDate": "2010-06-17T16:00:00.000+00:00",
            "industryClass": "汽车零部件",
            "description": "研发、生产、销售汽车变速器和新能源汽车传/驱动系统产品。"
        },
        {
            "ticker": "002418",
            "stockName": "康盛股份",
            "fullName": "浙江康盛股份有限公司",
            "listDate": "2010-05-31T16:00:00.000+00:00",
            "industryClass": "制冷配件",
            "description": "从事家电制冷配件业务和新能源汽车业务。"
        },
        {
            "ticker": "300681",
            "stockName": "英搏尔",
            "fullName": "珠海英搏尔电气股份有限公司",
            "listDate": "2017-07-24T16:00:00.000+00:00",
            "industryClass": "汽车零部件",
            "description": "专注于新能源汽车动力域研发、生产。"
        },
        {
            "ticker": "600386",
            "stockName": "北巴传媒",
            "fullName": "北京巴士传媒股份有限公司",
            "listDate": "2001-02-15T16:00:00.000+00:00",
            "industryClass": "汽车服务",
            "description": "广告传媒业务、汽车服务业务、新能源业务。"
        }],
    }),
};
</script>