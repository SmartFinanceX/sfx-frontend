<template>
  <v-container class="fbox" style="height: 100%">
    <v-sheet
      max-width="800"
      class="mx-auto rounded-shaped cbox"
      elevation="24"
      height="500"
      width="100%"
    >
      <v-row no-gutters>
        <v-col class="left">
          <v-img src="../images/logo_big.png" style="max-height: 200px"></v-img>
          <v-card-text class="text-h6" style="font-weight: bold"
            >&emsp;&emsp;为帮助广大A股投资者高效获取A股各家上市公司财务信息，辅助他们进⾏投资决策，本小组开发了上市公司财务信息收集与分析系统。本系统实现了行情查询、数据可视化、个人理财、量化交易等多种功能。</v-card-text
          >
        </v-col>
        <v-col class="right">
          <logon v-if="this.tag" :tag="tag" @toggleTag="toggleTag"></logon>
          <register v-else :tag="tag" @toggleTag="toggleTag"></register>
        </v-col>
      </v-row>
      <v-card-text style="text-align: center"
        ><p>{{ this.poem }}</p>
        <p>{{ this.info }}</p></v-card-text
      >
    </v-sheet>
  </v-container>
</template>
<script>
import "@/styles/fullscreen.css";
import Logon from "@/components/login/Logon.vue";
import Register from "@/components/login/Register.vue";
export default {
  // props: ["tag"],
  components: { Logon, Register },
  data: () => ({
    tag: true,
    poem: "",
    info: "",
  }),
  methods: {
    toggleTag() {
      this.tag = !this.tag;
    },
    getPoem() {
      const url = `https://v2.jinrishici.com/one.json`;
      this.$http.get(url).then((res) => {
        // console.log(res);
        //获取想要的数据
        this.poem = res.data.data.content;
        this.info =
          "【" +
          res.data.data.origin.dynasty +
          "】" +
          res.data.data.origin.author +
          "《" +
          res.data.data.origin.title +
          "》";
      });
    },
  },

  mounted() {
    this.getPoem();
  },
};
</script>

<style scoped>
.fbox {
  position: relative;
}
.cbox {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: rgba(255, 255, 255, 0.7);
}
.left {
  width: 50%;
}
</style>
