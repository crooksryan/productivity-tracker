<script setup>
    definePageMeta({
        layout: 'dash'
    })

    const {data, pending} =  await useFetch('/api/auth');
</script>

<template>
    <div v-if="pending">Loading</div>

    <div v-else>
        <div v-if="data.authorized">Logged In</div>    

    </div>
</template>