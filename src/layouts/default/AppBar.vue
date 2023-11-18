<!-- 整个网页的bar -->
<template>
  <v-app-bar flat class="elevation-1" scroll-behavior="fade-image collapse ">
    <v-app-bar-title>
      <router-link to="/">
        <v-btn prepend-icon="mdi-finance" variant="text"> </v-btn>
        SmartFinanceX
      </router-link>
    </v-app-bar-title>
    <template #append>
      <v-sheet class="pa-7 ma-2">
        <v-select
          label="搜索方式"
          v-model="way"
          :items="['关键词', '股票代码', '资讯']"
          variant="underlined"
          :hide-details="true"
        ></v-select
      ></v-sheet>
      <search-bar></search-bar>
      <router-link :to="{ name: 'Dashboard' }">
        <v-btn prepend-icon="mdi-star-box" variant="text"> 选股 </v-btn>
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
      <a href="https://sfx.antio2.cn">
        <v-btn prepend-icon="mdi-file-document-edit-outline" variant="text">
          文档
        </v-btn>
      </a>
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
};
</script>
