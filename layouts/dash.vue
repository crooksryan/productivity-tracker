<template>
    <nav class="filledNav">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7H256c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96h11.5c10.4 0 18 9.8 15.5 19.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H512c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H256v32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416c-34.9-26.2-58.7-66.3-63.2-112H68c-37.6 0-68-30.4-68-68s30.4-68 68-68h4c13.3 0 24 10.7 24 24s-10.7 24-24 24H68c-11 0-20 9-20 20s9 20 20 20H99.2c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2H384zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg>

        <ul>
            <li>
                <NuxtLink>Updates</NuxtLink>
            </li>
            <li>
                <NuxtLink>Issues</NuxtLink>
            </li>
            <li>
                <NuxtLink>Projects</NuxtLink>
            </li>
            <li>
                <NuxtLink>Profile</NuxtLink>
            </li>
        </ul>
    </nav>

    <div class="slot-holder">
        <slot></slot>
    </div>
</template>

<style scoped>
.filledNav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--primary);
    height: 3.4rem;
    z-index: 5;
}

nav ul{
    float: right;
    margin: 1rem 1.5rem 1rem 0;
    list-style-type: none;
}

nav ul li{
    display: inline-block;
    margin: 0 1rem;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.15rem;
}

nav svg{
    height: calc(3.4rem/2);
    margin: calc(3.4rem/4) calc(3.4rem/2);
    fill: var(--accent);
}

.slot-holder{
    padding-top: 3.4rem;
}

</style>