<template>
  <!-- <v-container class="elevation-1"> -->
  <v-row class="search">
    <v-col cols="3">
      <v-sheet class="pa-2 ma-2">
        <v-select v-model="way" :items="['关键词', '股票代码', '资讯']" variant="underlined"
          :hide-details="true"></v-select></v-sheet>
    </v-col>
    <v-col>
      <v-sheet class="pa-2 ma-2">
        <v-text-field v-model="msg" label="查询" type="text" variant="outlined" class="h.50">
          <template v-slot:append>
            <v-btn prepend-icon="mdi-map-search" variant="text" v-on:click="search">
              搜索
            </v-btn>
          </template>
        </v-text-field>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
// function clickMe() {
//     loading.value = true
//     message.value = 'Wait for it...'
//     setTimeout(() => {
//         loading.value = false
//         message.value = `You've clicked me!`
//     }, 2000)
// }
</script>

<script>
export default {
  props: ["initWay", "intiMsg"],

  data: () => ({
    loading: false,
    way: "搜索方式",
    msg: "",
  }),

  methods: {
    clickMe() {
      this.loading = true;
      this.message = "Wait for it...";
      setTimeout(() => {
        this.loading = false;
        this.message = `You've clicked me!`;
      }, 2000);
    },
    search() {
      console.log("Bar:", this.way, this.msg)
      this.$emit("search", this.way, this.msg);
    },
  },
  mounted() {
    console.log("init search bar")
    if (this.initWay != null) {
      this.way = this.initWay;
    }
    if (this.intiMsg != null) {
      this.msg = this.initMsg;
    }
  }
};
</script>

<style scoped>
.search {
  margin-top: 10px;
  opacity: 0.9;
}
</style>
