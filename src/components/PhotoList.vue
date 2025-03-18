
<script setup>
import { usePhotoList } from '../stores/PhotoList';

const photoList = usePhotoList();

</script>
  
<template>
  <div class="photoList col-span-5 grid text-center">
    <table class="photoList table-fixed">
      <thead class="photoList__thead text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          <th @click="photoList.dataSort('id')" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">id</th>
          <th @click="photoList.dataSort('albumId')" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">albumId</th>
          <th class="px-6 py-3 bg-gray-50 dark:bg-gray-800">title</th>
          <th class="px-6 py-3 bg-gray-50 dark:bg-gray-800">url</th>
          <th class="px-6 py-3 bg-gray-50 dark:bg-gray-800">thumbnailUrl</th>
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
  </div>
</template>


