<script setup>
import { usePhotoChangeTheme } from '../stores/PhotoChangeTheme'

const photoChangeTheme = usePhotoChangeTheme();


</script>

<template>
  <div class="photoChangeTheme col-span-5 text-end ">
    <button @click="photoChangeTheme.toggleTheme()"
      class="photoChangeTheme__btn mt-3 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#6ee7b7] text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm ">{{
        photoChangeTheme.textBtn }}</button>
  </div>
</template>


