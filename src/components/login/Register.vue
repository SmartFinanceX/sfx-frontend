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
    <v-card-text style="text-align: end"
      ><span class="text" @click="toggleTag">已有账号？前往登录</span>
      <p>&emsp;</p>
    </v-card-text></v-container
  >
</template>

<script>
export default {
  props: {
    tag: Boolean,
  },
  data: () => ({
    email: "",
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
</style>
