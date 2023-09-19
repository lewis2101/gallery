<template>
  <div class="bg" v-if="background !== null" :style="background">
      <div class="blur"></div>
  </div>
  <div class="oneItem__container">

    <div class="oneItem__desc">
      <div class="oneItem__name">
        <img src="../assets/vnGog.png" alt="">
        <p>Vincent van Gogh
          @vincentvangogh</p>
      </div>

      <div class="download">
        <Heart :show="show" src="../assets/addFavourite.svg" alt="" @click="addFavourite"/>
        <a v-if="img !== null" download :href="img.urls.regular" class="buttonGrand"> <span><img src="../assets/download_logo.svg" alt=""></span>Download </a>
        <a v-if="img !== null" download :href="img.urls.regular" class="buttonSmall"> <span><img src="../assets/download_logo.svg" alt=""></span></a>
      </div>
    </div>

    <img v-if="img !== null" :src="img.urls.regular" alt="" class="oneItem__img">


  </div>
</template>

<style>

</style>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {getPhoto} from "../utils/application";
import {imageI} from "../utils/types";
import Heart from "../components/Heart.vue";

const route = useRoute()

const imgId = ref('')
const img = ref<imageI>(null)

let local = JSON.parse(localStorage.getItem('images'))
const show = ref(false)

const refreshHeart = () => {
  show.value = !!local.find(i => i.id === imgId.value)
}
let background = ref<any>({})
const addFavourite = () => {
  local = JSON.parse(localStorage.getItem('images'))
  if (local !== null) {
    if(local.find(i => i.id === img.value.id)) {
      local = local.filter(i => i.id !== img.value.id)
      localStorage.setItem('images', JSON.stringify(local))
    } else {
      local.push(img.value);
      localStorage.setItem('images', JSON.stringify(local))
    }
  } else {
    const images = []
    images.push(img.value)
    localStorage.setItem('images', JSON.stringify(images))
    local = images
  }
  refreshHeart()
}
onMounted(async () => {
  imgId.value = route.params.id as string
  const response = await getPhoto(imgId.value)
  img.value = response.data as imageI
  background.value = `background: url(${img.value.urls.regular})`
  refreshHeart()
})
</script>