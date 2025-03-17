
<script setup>
import { usePhotoList } from '../stores/PhotoList';

const photoList = usePhotoList();

</script>
  
<template>
  <table class="table">
    <thead>
      <tr>
        <th @click="photoList.dataSort('id')">id</th>
        <th @click="photoList.dataSort('albumId')">albumId</th>
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
.table {
  height: 600px;
  overflow-y: auto;
}

th  {
  position: sticky; /* Элемент фиксируется при прокрутке */
    top: 0; /* Фиксация верхнего положения */
    background-color: #fff; /* Цвет фона */
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

