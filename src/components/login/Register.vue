<template>
  <v-container>
    <v-card-text
      class="text-h3"
      style="font-weight: bold; text-align: center; line-height: 100px"
    >
      注册
    </v-card-text>
    <v-text-field
      clearable
      label="邮箱"
      prepend-icon="mdi-email-outline"
      v-model="email"
      :rules="emailrule"
      required
    ></v-text-field>
    <v-text-field
      clearable
      label="验证码"
      prepend-icon="mdi-shield-key-outline"
      v-model="code"
    >
      <template v-slot:append>
        <v-btn icon="mdi-send" title="发送验证码" style="opacity: 0.5"> </v-btn>
      </template>
    </v-text-field>
    <v-btn
      size="large"
      block
      variant="outlined"
      style="font-weight: bold"
      @click="register"
    >
      点击注册
    </v-btn>
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
        >已有账号？前往登录</span
      >
      <p>&emsp;</p>
    </v-card-text></v-container
  >
</template>

<script>
import UserAgreement from "./UserAgreement.vue";
export default {
  components: { UserAgreement },
  props: {
    tag: Boolean,
  },
  data: () => ({
    email: "",
    emailrule: [(v) => !!v || "请填写邮箱"],
    code: "",
  }),
  methods: {
    show() {
      this.tag = !this.tag;
    },
    toggleTag() {
      this.$emit("toggleTag");
    },
  },
};
</script>
<style scoped>
.text:hover {
  color: rgb(0, 46, 166);
}
.text {
  cursor: pointer;
}
</style>
