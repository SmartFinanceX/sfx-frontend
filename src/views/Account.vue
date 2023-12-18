<template>
  <v-container>
    <v-navigation-drawer class="elevation-3">
      <v-card>
        <v-avatar image="../images/head.png" size="120"></v-avatar>
        <v-card-title style="font-weight: bold">{{ this.user }}</v-card-title>
      </v-card>
      <v-divider></v-divider>
      <v-list-item>
        <router-link :to="{ name: 'AccountCenter' }">
          <v-btn prepend-icon="mdi-account-outline" variant="text">
            个人主页
          </v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link :to="{ name: 'Collect' }">
          <v-btn prepend-icon="mdi-rocket-launch-outline" variant="text">
            我的收藏
          </v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link :to="{ name: 'TradeHistory' }">
          <v-btn prepend-icon="mdi-history" variant="text"> 交易记录 </v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link :to="{ name: 'UserInfor' }">
          <v-btn prepend-icon="mdi-account-edit-outline" variant="text">
            信息维护
          </v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <!-- <router-link :to="{ name: 'Logout' }">
          <v-btn prepend-icon="mdi-logout" variant="text"> 退出登录 </v-btn>
        </router-link> -->

        <v-dialog transition="dialog-bottom-transition" width="auto">
          <template v-slot:activator="{ props }">
            <v-btn prepend-icon="mdi-logout" v-bind="props" variant="text"
              >退出登录</v-btn
            >
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-toolbar color="red" title="登出账户"></v-toolbar>
              <v-card-text>
                <div class="text-h4 pa-12">确认退出当前账号吗？</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <router-link :to="{ name: 'Login' }"
                  ><v-btn variant="tonal" style="margin-left: -30%"
                    >确认</v-btn
                  ></router-link
                >
                <v-btn variant="tonal" @click="isActive.value = false"
                  >取消</v-btn
                >
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-list-item>
    </v-navigation-drawer>
    <router-view> </router-view>
  </v-container>
</template>
<script setup></script>
<script>
export default {
  components: {
    // Record
  },
  data: () => ({
    user: "小新爱炒股",
  }),
  methods: {},
};
</script>
