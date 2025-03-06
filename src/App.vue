<script setup>
import { usePhotoList } from './stores/PhotoList.js';
import PhotoHeader from './components/PhotoHeader.vue';
import PhotoListVue from './components/PhotoList.vue';
import PhotoLoader from './components/PhotoLoader.vue';
import PhotoFilter from './components/PhotoFilter.vue';
import { ref, onMounted } from 'vue'

const photoList = usePhotoList();

onMounted(() => {
  photoList.getAllList
});

</script>

<template>
  <main>
    <PhotoHeader />
    <PhotoFilter />
    <PhotoLoader v-if="photoList.loading" />
    <div v-else>
      <PhotoListVue />
    </div>

  </main>
</template>

