<template>
  <Search @search="search"/>
  <MainPhotos
    :images="images"
  />

</template>

<script setup lang="ts">
import Search from "../components/Search.vue";
import {getRandomPhotos, getSearchPhoto} from "../utils/application";
import {onMounted, ref} from "vue";
import {imageI} from "../utils/types";
import MainPhotos from "../components/MainPhotos.vue";
const images = ref<imageI[]>(null)

const search = async (model: string) => {
  const response = await getSearchPhoto(model)
  images.value = response.data.results as imageI[]
}

onMounted(async () => {
  const response: { data: imageI[] } = await getRandomPhotos()
  images.value = response.data
})
</script>