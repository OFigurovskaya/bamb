<script setup>
import { usePhotoList } from './stores/PhotoList.js';
import PhotoHeader from './components/PhotoHeader.vue';
import PhotoListVue from './components/PhotoList.vue';
import PhotoLoader from './components/PhotoLoader.vue'
import { ref, onMounted } from 'vue'

const photoList = usePhotoList();

onMounted(() => {
  photoList.getAllList
});

</script>

<template>
  <main>
    {{  photoList.loading }}
    <PhotoHeader />
    <PhotoLoader v-if="photoList.loading" />
    <div v-else>
      <PhotoListVue v-for="photo of photoList.allList" :key="photo.id" :photo="photo" />
    </div>

  </main>
</template>

