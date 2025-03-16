<script setup>
import { usePhotoFilter } from '../stores/PhotoFilter';
import { usePhotoList } from '../stores/PhotoList'

// const model = ref('');
const photoFilter = usePhotoFilter();
const photoList = usePhotoList();
</script>

<template>
    <form action=""  @submit.prevent="photoFilter.validateFilter(); photoFilter.goFilter()">
        <input type="text" placeholder="Введите номер альбома (или несколько через пробел)" v-model="photoFilter.inputValue" >
        <button class="searchBtn" @click.prevent="photoFilter.validateFilter(); photoFilter.goFilter()"
        :disabled='photoList.loading'
        >Поиск</button>
    </form>
   
</template>