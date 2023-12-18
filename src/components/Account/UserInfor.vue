<template>
  <v-sheet max-width="800" class="mx-auto">
    <v-card-title class="text-center text-h4" style="font-weight: bold"
      >完善个人信息</v-card-title
    >
    <v-form ref="form">
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="昵称"
        prepend-icon="mdi-account-question-outline"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || '性别不能为空']"
        label="性别"
        prepend-icon="mdi-gender-male-female"
        required
      ></v-select>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="邮箱"
        prepend-icon="mdi-email-outline"
        required
      ></v-text-field>

      <v-file-input show-size label="上传头像"></v-file-input>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || '请先同意']"
        label="我已同意上传全部信息"
        required
      ></v-checkbox>

      <v-container class="text-center">
        <v-btn size="x-large" class="me-4" type="submit" @click="validate">
          提交
        </v-btn>

        <v-btn size="x-large" @click="reset"> 清除 </v-btn>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    name: "",
    nameRules: [
      (v) => {
        if (v) return true;
        return "昵称不能为空";
      },
      (v) => {
        if (v && v.length <= 10) return true;
        return "请不要超过10个字符";
      },
    ],
    select: null,
    items: ["女", "男", "保密"],
    email: "",
    emailRules: [
      (value) => {
        if (value) return true;

        return "邮箱不能为空";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "请输入正确的电子邮件";
      },
    ],
    checkbox: false,
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("表单符合要求，提交成功");
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
