<script setup>
    definePageMeta({
        layout: 'dash',
        title: "Dashboard"
    }) 

    const {data, pending} =  await useFetch('/api/auth');
</script>


<template>
    Account Settings
</template>