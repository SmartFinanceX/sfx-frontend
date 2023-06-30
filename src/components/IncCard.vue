<template>
    <v-container class="mycard">
        <!-- <router-link to="{name: 'Dashboard' , params: { ticker:$ticker }}"> -->
        <v-card>
            <!-- 卡片的头部 -->
            <v-container v-on:click="click">
                <v-card-title> {{ stockName }} </v-card-title>
                <v-card-subtitle>
                    {{ ticker }}
                </v-card-subtitle>
                <!-- 分割线 -->
                <v-divider />
                <!--卡片的中部-->
                <v-card-text>
                    <li>所属行业：{{ field }}</li>
                    <li>建立日期：{{ listDate }}</li>
                    <li>简介：{{ message }}</li>
                </v-card-text>
            </v-container>
            <v-card-actions>
                <v-btn v-on:click="addticker" v-if="!selcted" prepend-icon="mdi-paperclip-plus" variant="text"> 添加选股
                </v-btn>
                <v-btn v-on:click="rmticker" v-else prepend-icon="mdi-paperclip-remove" variant="text"> 取消选股 </v-btn>
            </v-card-actions>
        </v-card>
        <!-- </router-link> -->
    </v-container>
</template>

<script>
import router from "@/router";

export default {
    props: {
        ticker: String,
        loaded: {
            type: Boolean,
            default: false
        },
        loadedstockName: String,
        loadedfield: String,
        loadedlistDate: String,
        loadedmsg: String,
        trigger: false,
    }, created() {
        // 从本地存储中加载数据
        this.getwatchlist();
    },
    watch: {
        ticker() {
            this.getInformation()
        },
        watchlists: {
            handler(newItems) {
                localStorage.setItem('watchlists', JSON.stringify(newItems))
                this.check();
                this.$emit("fresh")
            },
            deep: true
        },
        trigger() {
            this.getwatchlist();
        }
    },
    data: () => ({
        stockName: "",
        message: "",
        loading: false,
        field: "",
        listDate: "",
        watchlists: [],
        selcted: false,
    }),
    methods: {
        getwatchlist() {
            const watchlists = JSON.parse(localStorage.getItem('watchlists'))
            if (watchlists) {
                this.watchlists = watchlists
            }
        },
        getInformation() {
            if (this.loaded) {
                this.stockName = this.loadedstockName
                this.field = this.loadedfield
                this.listDate = this.loadedlistDate.split("T")[0];
                this.message = this.loadedmsg
                console.log(this)
                return
            }
            const url = `http://124.222.191.199:9000/inc/_ticker/${this.ticker}`;
            this.$http.get(url).then((res) => {
                // console.log(res);
                if (res.data.data == null) {
                    //alert(`抱歉，没有找到代码：${this.ticker}的相关信息`);
                }
                this.stockName = res.data.data.stockName;
                this.field = res.data.data.industryClass;
                this.listDate = res.data.data.listDate.split("T")[0];
                this.message = res.data.data.description;
            });
        },
        click() {
            console.log("[debug] 进行页面跳转" + this.ticker);
            // 获取当前页面的 host 和 pathname
            router.push({
                path: "/inc/" + this.ticker,
            });
        },
        addticker() {
            this.selcted = true;
            this.getwatchlist();
            this.watchlists.push(this.ticker)
            console.log(this.watchlists)
        },
        rmticker() {
            this.selcted = false;
            var index = this.watchlists.indexOf(this.ticker)
            while (index != -1) {
                this.watchlists.splice(index, 1)
                index = this.watchlists.indexOf(this.ticker)
            }
        },
        check() {
            var index = this.watchlists.indexOf(this.ticker)
            if (index != -1) {
                this.selcted = true;
            } else {
                this.selcted = false;
            }
        }
        // click() {
        //   console.log("[debug] 进行页面跳转" + this.ticker);
        //   router.push({ name: "Dashboard", params: { ticker: this.ticker } });
        // },

    },
    mounted() {
        this.getInformation();
    },
};
</script>

<style scoped>
li {
    list-style: none;
}

.mycard {
    display: inline-block;
}
</style>
