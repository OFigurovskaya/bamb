<script setup>
import { usePhotoList } from './stores/PhotoList';
import PhotoHeader from './components/PhotoHeader.vue';
import PhotoListVue from './components/PhotoList.vue';

const photoList = usePhotoList();
</script>

<template>
  <main>
    <PhotoHeader />
  
    <PhotoListVue v-for="photo of photoList.getAllList" :key="photo.id" :photo="photo" /> 
  </main>
</template>

