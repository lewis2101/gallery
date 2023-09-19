<template>
  <Header/>
  <router-view/>
  <ScrollToTop/>
</template>

<script setup lang="ts">
import Header from "./components/header.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
</script>

<style scoped>

</style>
