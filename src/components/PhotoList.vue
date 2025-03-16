
<script setup>
import { usePhotoList } from '../stores/PhotoList';
import { defineProps } from 'vue';

const photoList = usePhotoList();

</script>
  
<template>
  <table class="table">
    <thead>
      <tr>
        <th>id</th>
        <th>albumId</th>
        <th>title</th>
        <th>url</th>
        <th>thumbnailUrl</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="photo in photoList.allList" :key="photo.id">
        <td>{{ photo.id }}</td>
        <td>{{ photo.albumId }}</td>
        <td>{{ photo.title }}</td>
        <td>
          <a :href="photo.url" target="_blank" rel="noopener noreferrer">View Image</a>
        </td>
        <td>
          <a :href="photo.thumbnailUrl" target="_blank" rel="noopener noreferrer">View Thumbnail</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
  
<style>
.photo-container {
  height: 600px;
  overflow-y: auto;
}

.table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

.load-more {
  height: 1px;
  /* Минимальная высота для наблюдения */
}

.table {
  margin: 0 auto;
}
</style>

