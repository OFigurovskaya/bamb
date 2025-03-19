<script setup>
import { usePhotoList } from '../src/stores/PhotoList.js';
import PhotoHeader from '../src/components/PhotoHeader.vue';
import PhotoList from '../src/components/PhotoList.vue';
import PhotoLoader from '../src/components/PhotoLoader.vue';
import PhotoFilter from '../src/components/PhotoFilter.vue';
import PhotoBtnTheme from '../src/components/PhotoBtnTheme.vue';


const photoList = usePhotoList();

</script>

<template>
  <main class="ligth grid grid-cols-5 justify-evenly">
    <PhotoBtnTheme />
    <PhotoHeader />
    <PhotoFilter />
    <PhotoLoader v-if="photoList.loading" />
    <PhotoList v-else/>
  </main>
</template>

