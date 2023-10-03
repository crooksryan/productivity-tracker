<template>
    <title>Home Pages</title>
    <h1>Task Scheduling and Productivity App</h1>

    <div class="holder">
        <div class="main">
            <h3>Make lists and booest efficiency!</h3>
            <!-- throw in an icon -->
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            <div class="button-bundle">
                <NuxtLink to="/signup" class="button sign-up">Get Started</NuxtLink>
                <NuxtLink to="/login" class="button login">Login</NuxtLink> 
            </div>
        </div>
    </div>
</template>

<style scoped>
h1{
    width: 100%;
    text-align: center;
}

svg{
    height: 10rem;
    fill: var(--primary);
    margin: 1.25rem  2.5rem;
}

.holder{
    display: flex;
    justify-content: center;
}

.main{
    background-color: var(--secondary);
    margin: 10px 20px;
    width: fit-content;
    padding: 10px 20px;
    border-radius: 1rem;
    display: flex;
    justify-self: center;
    flex-direction: column;
}

.button-bundle{
    display: flex;
    justify-content: right;
}

.button{
    margin: 0.5rem;
    text-decoration: none;
    border: 0.15rem solid var(--primary);
    padding: 0.5rem;
    color: var(--text);
    border-radius: 0.75rem;
    transition: all 350ms;
}

.sign-up{
    background-color: var(--primary);
}

.button:hover{
    background-color: var(--accent);
    scale: 1.2;
}

</style>