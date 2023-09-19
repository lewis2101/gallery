<template>
  <header>
    <img src="../assets/header_logo.svg" alt="" @click="toMain">
    <div class="header__favourite" @click="toFavourite">
      <img src="../assets/favourite_logo.svg" alt="">
      <p>Избранное</p>
    </div>
  </header>
</template>

<script setup lang="ts">

import router from "../router/router";

const toMain = () => {
  router.push({
    name: 'main'
  })
}

const toFavourite = () => {
  router.push({
    name: 'favourites'
  })
}

</script>