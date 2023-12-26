<!-- 整个网页的bar -->
<template>
  <!-- <v-app-bar
    flat
    class="elevation-1"
    scroll-behavior="fade-image collapse "
    image="@/images/bg1.jpg"
  > -->
  <v-app-bar flat class="elevation-1" scroll-behavior="fade-image  ">
    <v-app-bar-title>
      <router-link to="/dashboard" style="color: #000">
        <v-btn prepend-icon="mdi-finance" variant="text"> </v-btn>
        SmartFinanceX
      </router-link>
    </v-app-bar-title>
    <div style="min-width: 600px; display: flex"><search-bar @search="search"></search-bar></div>
    <template #append>
      <router-link :to="{ name: 'Dashboard' }">
        <v-btn prepend-icon="mdi-home-outline" variant="text"> 首页 </v-btn>
      </router-link>
      <router-link :to="{ name: 'SearchView' }">
        <v-btn prepend-icon="mdi-cloud-search-outline" variant="text">
          搜索
        </v-btn>
      </router-link>
      <router-link :to="{ name: 'News' }">
        <v-btn prepend-icon="mdi-newspaper-variant-outline" variant="text">
          资讯
        </v-btn>
      </router-link>
      <!-- <router-link :to="{ name: 'Collect' }">
        <v-btn prepend-icon="mdi-rocket-launch-outline" variant="text">
          收藏
        </v-btn>
      </router-link> -->
      <a href="https://sfx.antio2.cn">
        <v-btn prepend-icon="mdi-file-document-edit-outline" variant="text">
          文档
        </v-btn>
      </a>
      <!-- <router-link :to="{ name: 'Login' }">
        <v-btn prepend-icon="mdi-logout" variant="text"> 退出 </v-btn>
      </router-link> -->
      <router-link :to="{ name: 'AccountCenter' }">
        <v-btn prepend-icon="mdi-account-outline" variant="text">
          个人中心
        </v-btn>
      </router-link>
    </template>
  </v-app-bar>
</template>
<script setup>
import SearchBar from "@/components/SearchBar";
</script>

<script>
//
export default {
  name: "App",

  components: {},
  data: () => ({}),
  methods: {
    search(way2, msg2) {
      console.log("App", way2, msg2)
      this.$router.push({
        name: "SearchView",
        params: { way: way2, key: msg2 },
      }
      )
    },
  }
};
</script>
