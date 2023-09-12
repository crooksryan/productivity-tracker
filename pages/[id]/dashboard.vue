<script setup>
    definePageMeta({
        layout: 'dash',
        title: "Dashboard"
    }) 

    const {data, pending} =  await useFetch('/api/auth');
</script>

<template>
    <div v-if="pending">Loading</div>

    <div v-else>
        <h1>Welcome, {{ data.user }}</h1>

        <h2>Today's Schedule</h2>

        <!-- apply conditional here -->
        <p>Nothing planned for today</p>

        <h2>Upcoming</h2>

        <p>Not busy</p>
    </div>
</template>