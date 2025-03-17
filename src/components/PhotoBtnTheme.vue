<script setup>
import { usePhotoChangeTheme } from '../stores/PhotoChangeTheme'

const photoChangeTheme = usePhotoChangeTheme();


</script>

<template>
    {{ photoChangeTheme.textBtn }}
  <button @click="photoChangeTheme.fetchText"></button>
</template>


