<script setup lang="ts">
const props = defineProps<{ comps: string; title: string; name: string; img: string; link?: string }>();
</script>

<template>
    <a class="card" :href="link" target="_blank">
        <img :src="img" class="profile_picture" :alt="props.name" />
        <h1>{{ props.name }}</h1>
        <h2>{{ props.comps }}</h2>
        <h2>{{ props.title }}</h2>

        <!-- We can add a popup later for each captain/lead -->
        <!-- <div v-if="popup" class="popup">
            <slot></slot>
        </div> -->
    </a>
</template>

<style scoped>
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: var(--gryphon-white);
    color: var(--gryphon-light-black);
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
}

.profile_picture {
    width: 220px;
    height: 220px;
    image-rendering: crisp-edges;
    /* image-rendering: -webkit-optimize-contrast; */
    object-fit: cover;
    border-radius: 10px;
    padding-bottom: 5px;
}

h1 {
    margin: 0.1em;
    font-size: 1.3em;
}

h2 {
    margin: 0.1em;
    font-size: 1.1em;
}
</style>
