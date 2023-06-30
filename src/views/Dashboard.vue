<template>
  <v-container>
    <p>您的收藏</p>
    <div class="container">
      <inc-card ticker="000001" class="mycard" />
      <inc-card ticker="000002" class="mycard" />
      <inc-card ticker="000008" class="mycard" />
      <inc-card ticker="000004" class="mycard" />
      <inc-card ticker="000005" class="mycard" />
      <inc-card ticker="000006" class="mycard" />
      <inc-card ticker="000007" class="mycard" />
    </div>
  </v-container>
</template>
<script setup>
import IncCard from "@/components/IncCard.vue";
</script>
<script>
export default {
  name: "Dashboard",

  components: {
    // IncCard: () => import("@/components/IncCard.vue"),
  },
  data: () => ({}),
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.mycard {
  flex: 0 0 300px; /* 设置卡片宽度 */
}
</style>
