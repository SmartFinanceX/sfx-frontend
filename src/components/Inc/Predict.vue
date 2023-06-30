<template>
  <v-container>
    <p>预测</p>
  </v-container>
</template>
<script setup></script>
<script>
export default {
  components: {},
  data() {
    return {
      data: {
        ticker: "300456",
        category: 1,
      },
    };
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      this.$http
        .post("http://124.222.191.199:9000/stock/live/000001", this.data)
        .then((response) => {
          // 请求成功时的处理逻辑
          console.log(response);
        });
    },
  },
};
</script>
