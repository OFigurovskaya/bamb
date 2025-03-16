<script setup>
import { usePhotoList } from './stores/PhotoList.js';
import PhotoHeader from './components/PhotoHeader.vue';
import PhotoList from './components/PhotoList.vue';
import PhotoLoader from './components/PhotoLoader.vue';
import PhotoFilter from './components/PhotoFilter.vue';
import { onMounted, defineAsyncComponent } from 'vue';


const photoList = usePhotoList();

</script>

<template>
  <main>
    <PhotoHeader />
    <PhotoFilter />
    <PhotoLoader v-if="photoList.loading" />
    <div v-else>
        <PhotoList />
    </div>
  </main>
</template>

