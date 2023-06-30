<template>
  <div class="infor">
    <div class="head">
      <img class="image" src="../../images/公司.png" />
      <span class="introduce"><b>公司简介</b></span>
    </div>
    <div class="middle">
      <div class="name content">公司： {{ fullName }}</div>
      <div class="= content">代码： {{ ticker }}</div>
      <div class="field content">所属行业： {{ feild }}</div>
      <div class="time content">建立日期： {{ date }}</div>
    </div>
    <div class="bottom">
      <span>简介：{{ message }}</span>
    </div>
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
      feild: "",
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
      this.fullName = this.infor.fullName;
      this.feild = this.infor.industryClass;
      this.date = this.infor.listDate;
      this.ticker = this.infor.ticker;
      this.message = this.infor.description;
    },
  },
  mounted() {
    this.givedata();
  },
};
</script>

<style scoped>
.head {
  margin-bottom: 20px;
}
.infor {
  display: inline-block;
  width: 230px;
  height: 400px;
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
</style>
