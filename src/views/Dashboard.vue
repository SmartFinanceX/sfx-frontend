<template>
    <v-container>
        <p>
            这里实现收藏选股功能
        </p>
        <inc-card ticker="000001" />
        <inc-card ticker="000002" />
        <inc-card ticker="000003" />
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