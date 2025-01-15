<script setup lang="ts">
import MenuIcon from "vue-material-design-icons/Menu.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

// Most of this code was adapted from:
// https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
const dropdown_active = ref(false);

window.addEventListener("scroll", () => {
    dropdown_active.value = false;
});
</script>

<template>
    <div class="navbar highlight">
        <RouterLink to="/" class="text"><img src="/media/logos/RevOutline-WIDERaceReadyModules.png" alt="Race Ready Modules" /></RouterLink>
        <RouterLink to="/" class="crest"><img src="/media/logos/RevOutline-RaceReadyModules.png" alt="Race Ready Modules" /></RouterLink>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/partners">Partner Teams</RouterLink>
        <RouterLink to="/sponsorship">Sponsorship</RouterLink>
        <!-- <RouterLink to="/info">Docs</RouterLink> -->
        <MenuIcon class="hamburger" @click="dropdown_active = !dropdown_active"></MenuIcon>
    </div>

    <transition name="slide">
        <div class="dropdown highlight" v-if="dropdown_active" @click="dropdown_active = !dropdown_active">
            <RouterLink to="/shop">Shop</RouterLink>
            <RouterLink to="/partners">Partner Teams</RouterLink>
            <RouterLink to="/sponsorship">Sponsorship</RouterLink>
            <!-- <RouterLink to="/info">Docs</RouterLink> -->
        </div>
    </transition>
</template>

<style scoped>
.text img {
    height: 70%;
    margin: 10px;
    filter: var(--light-black-filter);
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 4em;
    background-color: var(--gryphon-red-transparent);
    margin: 0;
    display: flex;
    overflow: hidden;
    z-index: 1000;
}

.crest img {
    display: none;
}

.navbar > a:not(a:nth-child(-n + 2)) {
    padding: 0 20px;
    color: var(--gryphon-light-black);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
}

.navbar > span {
    padding: 0 20px;
    color: var(--gryphon-light-black);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    align-items: center;
    text-align: center;
}

.dropdown {
    position: fixed;
    top: 4em;
    right: 0;
    display: none;
    flex-direction: column;
    z-index: 1000;

    /* Dropdown animation */
    transform-origin: top;
    transition: transform 0.3s ease-in-out;
}

.dropdown a {
    padding: 10px 25px;
    color: var(--gryphon-light-black);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    background-color: var(--gryphon-red-transparent);
    border-top: 2px solid var(--gryphon-light-black);
    border-left: 2px solid var(--gryphon-light-black);
}

.dropdown :last-child {
    border-radius: 0 0 0 1rem;
    border-bottom: 2px solid var(--gryphon-light-black);
}
.dropdown :first-child {
    border-top: 0;
}

.hamburger {
    display: none;
    color: var(--gryphon-light-black);
    font-size: 2rem;
    margin-left: auto;
    margin-right: 10px;
}

/* Dropdown animation */
.slide-enter-from,
.slide-leave-to {
    transform: scaleY(0);
}

@media (hover: hover) and (pointer: fine) {
    .highlight a:hover:not(.text, .crest) {
        /* Dont highlight the crest cause it looks weird */
        background-color: var(--gryphon-light-black);
        color: var(--gryphon-red);
        transition-duration: 0.5s;
    }
    .highlight .text:hover img,
    .highlight .crest:hover img {
        /* Dont highlight the crest cause it looks weird */
        filter: var(--red-filter);
        transition-duration: 0.5s;
    }
    .highlight .text:hover,
    .highlight .crest:hover {
        /* Dont highlight the crest cause it looks weird */
        background-color: var(--gryphon-light-black);
        transition-duration: 0.5s;
    }
}

@media screen and (max-width: 900px) {
    .text {
        display: none;
    }
    .crest img {
        height: 70%;
        margin: 10px;
        filter: var(--light-black-filter);
        display: block;
    }
}

@media screen and (max-width: 600px) {
    .navbar a:not(a:nth-child(2)) {
        display: none;
    }

    .navbar .hamburger {
        /* display: block; */
        display: flex;
    }

    .dropdown {
        display: flex;
    }
}
</style>
