<template>
  <div>
    <v-list lines="one">
      <v-list-item class="header"
        ><v-icon icon="mdi-city"></v-icon> 公司简介</v-list-item
      >

      <v-list-item>
        <v-list-item>
          <v-icon icon="mdi-domain"></v-icon>

          公司名称： {{ fullName }}</v-list-item
        >
      </v-list-item>
      <v-list-item>
        <v-list-item
          ><v-icon icon="mdi-trending-up"></v-icon>股票代码：
          {{ ticker }}</v-list-item
        >
      </v-list-item>
      <v-list-item>
        <v-list-item
          ><v-icon icon="mdi-factory"></v-icon> 所属行业：{{
            field
          }}</v-list-item
        >
      </v-list-item>
      <v-list-item>
        <v-list-item
          ><v-icon icon="mdi-update"></v-icon> 建立日期：{{ date }}</v-list-item
        >
      </v-list-item>
      <v-list-item>
        <v-list-item
          ><v-icon icon="mdi-briefcase-account"></v-icon> 简要介绍：{{
            message
          }}</v-list-item
        >
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    infor: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      fullName: "",
      field: "",
      date: "",
      ticker: "",
      message: "",
    };
  },
  watch: {
    infor: {
      handler(newdata, olddata) {
        console.debug("Newdata");
        // console.log(newdata);
        this.givedata();
      },
      deep: true,
    },
  },
  methods: {
    givedata() {
      // console.log(this.infor);
      this.fullName = this.infor.fullName;
      this.field = this.infor.industryClass;
      this.date = this.infor.listDate;
      this.ticker = this.infor.ticker;
      this.message = this.infor.description;
    },
  },
};
</script>

<style scoped>
.head {
  margin-bottom: 20px;
}
.infor1 {
  display: inline-block;
  width: 100%;
  /* height: 100%; */
}
.image {
  vertical-align: top;
  margin-right: 5px;
  width: 20px;
  height: 20px;
  fill: none;
}
.name {
  vertical-align: top;
  margin-top: 10px;
}
.content {
  width: 100%;
  height: 30px;
}
.bottom {
  margin-top: 15px;
}
.header {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
