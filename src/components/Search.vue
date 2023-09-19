<template>
  <div class="container__search">
    <form @submit.prevent="search">
      <div class="search__opacity"></div>
      <div class="container__input">
        <input type="text" placeholder="Поиск" v-model="model">
        <img src="../assets/search_logo.svg" alt="" @click="search">
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const model = ref('')
const emit = defineEmits(['search'])
const search = () => {
  emit('search', model.value)
  model.value = ''
}

</script>