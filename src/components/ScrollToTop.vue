<template>
  <img v-if="isVisible" class="buttonToTop" src="../assets/button_top.svg" alt="" @click="scrollTop">
</template>
<script setup lang="ts">
import {computed} from "vue";
import {useScroll} from "@vueuse/core";
const isVisible = computed(() => y.value >= 150)
const { y } = useScroll(window, {
  throttle: 100
})
const scrollTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>