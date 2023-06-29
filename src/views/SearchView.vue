<template>
    <v-container>
        <SearchBar>

        </SearchBar>
    </v-container>
</template>
<script setup>
import SearchBar from '@/components/SearchBar';

</script>
<script>
export default {
    name: "SearchView",

    components: {
        // SearchBar: () => import("@/components/SearchBar"),
    },
    data: () => ({}),
};
</script>