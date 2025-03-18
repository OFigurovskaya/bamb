<script setup>
import { usePhotoFilter } from '../stores/PhotoFilter';
import { usePhotoList } from '../stores/PhotoList'

const photoFilter = usePhotoFilter();
const photoList = usePhotoList();
</script>

<template>
    <div class="photoFilter col-span-5">
        <form action="" @submit.prevent="photoFilter.validateFilter(); photoFilter.goFilter()" class="photoFilter__form">
            <input type="text" placeholder="Введите номер альбома (или несколько через пробел)"
                v-model="photoFilter.inputValue"
                class="photoFilter__input block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
            <p class="photoFilter__error"> {{ photoFilter.error }}</p>
            <button
                class="photoFilter__btn searchBtn block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50"
                @click.prevent="photoFilter.validateFilter(); photoFilter.goFilter()"
                :disabled='photoList.loading'>Поиск</button>
        </form>
    </div>
</template>