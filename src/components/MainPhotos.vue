<template>
  <main>
    <loader v-if="images === null"/>
    <img @click="openItem(item.id)" :src="item.urls.regular" alt="" width="473" v-for="item in props.images" :key="item.id">
  </main>
</template>

<script setup lang="ts">
import {imageI} from "../utils/types";
import Loader from "./loader.vue";
import router from "../router/router";

const props = withDefaults(defineProps<{
    images: imageI[] | null
}>(), {
    images: null
})

const openItem = (id: string) => {
  router.push({
    name: 'item',
    params: {
      id: id
    }
  })
}

</script>