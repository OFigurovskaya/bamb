<script setup>
const props = defineProps({
    photo: {
        type: Object,
        required: true,
        default: () => { }
    }
});
</script>

<template>
    <div>{{ photo }}</div>
</template>