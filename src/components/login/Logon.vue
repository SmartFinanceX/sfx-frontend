<template>
  <v-container>
    <v-card-text
      class="text-h3"
      style="font-weight: bold; text-align: center; line-height: 100px"
    >
      登录
    </v-card-text>
    <v-text-field
      clearable
      label="邮箱"
      prepend-icon="mdi-email-outline"
      v-model="email"
    ></v-text-field>
    <v-text-field
      clearable
      label="密码"
      prepend-icon="mdi-lock-outline"
      v-model="code"
    ></v-text-field>
    <v-btn
      size="large"
      block
      variant="outlined"
      style="font-weight: bold"
      @click="login"
    >
      点击登录
    </v-btn>
    <v-card-text style="text-align: end"
      ><span class="text" @click="toggleTag">没有账号?点击注册</span>
      <p>默认账号：123@qq.com，密码：123</p></v-card-text
    >
  </v-container>
</template>

<script>
import router from "@/router";
export default {
  props: {
    tag: Boolean,
  },
  data: () => ({
    accont: "123@qq.com",
    password: "123",
    email: "123@qq.com",
    code: "",
  }),
  methods: {
    // 登录函数
    login() {
      if (this.email === this.accont && this.code === this.password) {
        router.push("/dashboard");
      } else {
        alert("账号或密码有错误，请重新输入");
      }
    },

    toggleTag() {
      this.$emit("toggleTag");
    },
  },
};
</script>
<style scoped>
.text {
  cursor: pointer;
}
.text:hover {
  color: rgb(0, 46, 166);
}
</style>
