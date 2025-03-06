<script setup>
import { ref } from 'vue'
const model = ref('');
</script>

<template>
    <input type="text" placeholder="Введите номер альбома" v-model="model">
</template>