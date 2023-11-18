<template>
  <v-container class="elevation-1">
    <v-row no-gutters>
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2">
          <v-select
            label="搜索方式"
            v-model="way"
            :items="['关键词', '股票代码', '资讯']"
            variant="underlined"
            :hide-details="true"
          ></v-select
        ></v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-text-field
            v-model="msg"
            label="查询"
            type="text"
            variant="outlined"
            class="h.50"
          >
            <template v-slot:append>
              <v-btn
                prepend-icon="mdi-map-search"
                variant="text"
                v-on:click="search"
              >
                搜索
              </v-btn>
            </template>
          </v-text-field>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
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
  props: {},

  data: () => ({
    loading: false,
    way: "关键词",
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
      this.$emit("search", this.way, this.msg);
    },
  },
};
</script>
