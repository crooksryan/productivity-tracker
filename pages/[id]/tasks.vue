<script setup lang="ts">
    definePageMeta({
        layout: 'dash'
    });

    const createMenu = ref(false);

    function menu(){
        createMenu.value = !createMenu.value;
        console.log(createMenu.value);
    }
</script>

<template>
    <h1>Tasks</h1>
    
    <h2>Comming Up</h2>

    <p>None</p>



    <button @click="menu" :class="{ red: createMenu}">Create Task</button>
</template>

<style scoped>
button{
    font-size: 1rem;
    background-color: var(--accent);
    padding: 1.0rem .75rem;
    border: none;
    border-radius: 12px;
}

.red{
    background-color: red;
}
</style>