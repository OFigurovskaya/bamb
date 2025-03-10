<script setup>
import { ref } from 'vue';
import { usePhotoFilter } from '../stores/PhotoFilter'

// const model = ref('');
const photoFilter = usePhotoFilter();
</script>

<template>
    <form action=""  @submit.prevent="photoFilter.validateFilter(); photoFilter.goFilter()">
        <input type="text" placeholder="Введите номер альбома (или несколько через пробел)" v-model="photoFilter.inputValue" >
        {{ photoFilter.error }} 
    </form>
   
</template>