<template>
  <v-container>
    <!-- <v-app-bar>
    <v-app-bar-title> {{ stockName }} {{ ticker }} </v-app-bar-title>
      <v-btn v-on:click="addticker" v-if="!selcted" prepend-icon="mdi-paperclip-plus" variant="text">
        添加选股
      </v-btn>
      <v-btn v-on:click="rmticker" v-else prepend-icon="mdi-paperclip-remove" variant="text">
        取消选股
      </v-btn>
      <v-spacer></v-spacer>
      <router-link :to="{ name: 'BasicInfo' }">
        <v-btn prepend-icon="mdi-poll" variant="text"> 数据分析 </v-btn>
      </router-link>
      <router-link :to="{ name: 'Predict' }">
        <v-btn prepend-icon="mdi-sticker-text" variant="text"> 数据预测 </v-btn>
      </router-link>
      <router-link :to="{ name: 'Stock' }">
        <v-btn prepend-icon="mdi-thermostat" variant="text"> 实时股价 </v-btn>
      </router-link>
      <router-link :to="{ name: 'defaultTrade' }">
        <v-btn prepend-icon="mdi-go-kart-track" variant="text"> 我的交易 </v-btn>
      </router-link>
    </v-app-bar> -->
    <v-navigation-drawer class="elevation-3">
      <v-card :title="stockName" :subtitle="ticker"></v-card>
      <v-divider></v-divider>
      <v-list-item>
        <v-btn v-on:click="addticker" v-if="!selcted" prepend-icon="mdi-eye-plus" variant="text">
          添加选股
        </v-btn>
        <v-btn v-on:click="rmticker" v-else prepend-icon="mdi-eye-minus" variant="text">
          取消选股
        </v-btn>
      </v-list-item>
      <v-list-item>
        <router-link :to="{ name: 'BasicInfo' }">
          <v-btn prepend-icon="mdi-poll" variant="text"> 基础数据 </v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link :to="{ name: 'Board' }">
          <v-btn prepend-icon="mdi-note-alert" variant="text"> 财务报表 </v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link :to="{ name: 'Balance' }">
          <v-btn prepend-icon="mdi-scale-balance" variant="text"> 结构分析 </v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link :to="{ name: 'Predict' }">
          <v-btn prepend-icon="mdi-sticker-text" variant="text">
            分析预测
          </v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link :to="{ name: 'Stock' }">
          <v-btn prepend-icon="mdi-thermostat" variant="text"> 实时股价 </v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link :to="{ name: 'Trade' }">
          <v-btn prepend-icon="mdi-go-kart-track" variant="text">
            我的交易
          </v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link :to="{ name: 'Collect' }">
          <v-btn prepend-icon="mdi-rocket-launch-outline" variant="text">
            收藏列表
          </v-btn>
        </router-link>
      </v-list-item>
    </v-navigation-drawer>
    <router-view :ticker="ticker"> </router-view>
  </v-container>
</template>
<script setup></script>
<script>
export default {
  props: ["ticker", "name"],
  created() {
    // 从本地存储中加载数据
    const watchlists = JSON.parse(localStorage.getItem("watchlists"));
    if (watchlists) {
      this.watchlists = watchlists;
      this.selcted = watchlists.indexOf(this.ticker) !== -1;
    }
  },
  watch: {
    // 监听 items 数组的变化，并将其保存到本地存储中
    watchlists: {
      handler(newItems) {
        localStorage.setItem("watchlists", JSON.stringify(newItems));
        this.trigger = !this.trigger;
      },
      deep: true,
    },
  },
  mounted() {
    console.log("[debug] inc" + this.ticker);
  },
  components: {},
  data() {
    return {
      watchlists: [],
      stockName: "默认股票名",
      selcted: false,
      trigger: false,
    };
  },
  methods: {
    getInformation() {
      const url = `/api/inc/_ticker/${this.ticker}`;
      this.$http.get(url).then((res) => {
        this.stockName = res.data.data.stockName;
      });
    },
    addticker() {
      this.selcted = true;

      this.watchlists.push(this.ticker);
      console.log(this.watchlists);
    },
    rmticker() {
      this.selcted = false;
      const index = this.watchlists.indexOf(this.ticker);
      if (index != -1) {
        this.watchlists.splice(index, 1);
      }
    },
  },
  mounted() {
    this.getInformation();
  },
};
</script>
