<template>
<h1>Избранное</h1>
  <MainPhotos
      v-if="images !== null && images?.length"
    :images="images"
  />
  <p v-else class="nonPhoto">Фотографии нет</p>
</template>

<script setup lang="ts">
import MainPhotos from "../components/MainPhotos.vue";
const local = JSON.parse(localStorage.getItem('images'))
const images = local
</script>