<script setup>
// const props = defineProps({
//     photo: {
//         type: Object,
//         required: true,
//         default: () => { }
//     }
// });
import { usePhotoList } from '../stores/PhotoList';
const photoList = usePhotoList();


</script>

<template>
    <table class="table">
        <tr>
            <th>id</th>
            <th>albumId</th>
            <th>title</th>
            <th>url</th>
            <th>thumbnailUrl</th>
        </tr>
        <tr v-for="photo of photoList.allList" :key="photo.id" :photo="photo">
            <th>{{ photo.id }}</th>
            <th>{{ photo.albumId }}</th>
            <th>{{ photo.title }}</th>
            <th><img :src="`${photo.url}`" :alt="`${photo.url}`"></th>
            <th><img :src="`${photo.thumbnailUrl}`" :alt="`${photo.thumbnailUrl}`"></th>
        </tr>
    </table>
</template>

<style>
table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
}
</style>

