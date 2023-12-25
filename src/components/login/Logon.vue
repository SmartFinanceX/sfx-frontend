<template>
  <v-container>
    <v-form ref="form">
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
        :rules="emailrules"
        required
      ></v-text-field>
      <v-text-field
        clearable
        label="密码"
        prepend-icon="mdi-lock-outline"
        v-model="code"
        :rules="coderules"
        required
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
    </v-form>
    <v-card-text
      ><span class="text" style="float: left">
        <v-dialog transition="dialog-bottom-transition" width="auto">
          <template v-slot:activator="{ props }">
            <button v-bind="props" variant="text">
              用户隐私政策和服务条款
            </button>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card max-width="800">
              <v-toolbar
                color="black"
                title="用户隐私政策和服务条款"
              ></v-toolbar>
              <v-card-text>
                <div class="text-h8 pa-12">
                  <user-agreement></user-agreement>
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn variant="tonal" @click="isActive.value = false"
                  >同意</v-btn
                >
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog></span
      >
      <span class="text" @click="toggleTag" style="float: right"
        >没有账号?点击注册</span
      >
      <p style="float: right">默认账号：123@qq.com，密码：123</p>
    </v-card-text>
  </v-container>
</template>

<script>
import router from "@/router";
import UserAgreement from "./UserAgreement.vue";
export default {
  components: { UserAgreement },
  props: {
    tag: Boolean,
  },
  data: () => ({
    accont: "123@qq.com",
    password: "123",
    email: "123@qq.com",
    emailrules: [(v) => !!v || "请填写邮箱"],
    code: "",
    coderules: [(v) => !!v || "请填写密码"],
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
