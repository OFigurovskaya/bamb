<script setup>
import { usePhotoChangeTheme } from '../stores/PhotoChangeTheme'

const photoChangeTheme = usePhotoChangeTheme();


</script>

<template>
  <button @click="photoChangeTheme.toggleTheme()">{{ photoChangeTheme.textBtn }}</button>
</template>


