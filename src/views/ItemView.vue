<script setup lang="ts">
import ImageGallery from "@/components/ImageGallery.vue";
import products from "@/products.json";
import { ref } from "vue";

const props = defineProps<{ item: string }>();

const product = ref(products[props.item]);
const images = ref(product.value.images.map((img: string) => `/products/${product.value.name}/${img}.png`));
const product_description = ref(products[props.item].description.join(""));
</script>

<template>
    <div class="team">
        <hr />
        <div class="row">
            <div class="gallery-wrapper">
                <ImageGallery class="gallery" :images="images" />
            </div>
            <div class="description_wrapper">
                <h2>{{ product.name }}</h2>
                <hr />

                <div v-html="product_description"></div>

                <div class="button-wrapper">
                    <a class="button" :href="`mailto:racereadymodules@gmail.com?subject=Interest in ${product.name}`">Express Interest!</a>
                </div>

                <p></p>

                <div class="links-wrapper" v-if="product.documents.length != 0">
                    <h2>Documents</h2>
                    <template v-for="doc in product.documents" :key="doc.name">
                        <a :href="doc.url" target="_blank">{{ doc.name }}</a>
                        <hr />
                    </template>
                </div>
            </div>
        </div>
        <hr />
    </div>
</template>

<style scoped>
.links-wrapper > a {
    display: block;
    font-size: 1rem;
    text-decoration: none;
    padding-top: 1rem;
    padding-left: 0.5rem;
    color: black;
    transition-duration: 0.2s;
}
.links-wrapper > a:hover {
    color: var(--gryphon-red);
    translate: 8px;
}

.team {
    background-color: var(--gryphon-white);
    padding: 7rem 2rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gryphon-light-black);
}

.row {
    background-color: var(--gryphon-white);
    width: 100%;
    padding: 1rem 1rem;
    gap: 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    color: var(--gryphon-light-black);
    min-height: 0;
}


.button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
}

.gallery-wrapper {
    border-radius: 1rem;
    box-shadow: 0 0 10px var(--gryphon-light-gray);
    max-width: 500px;
    width: 100%;
}

.gallery {
    padding: 1rem;
}

.description_wrapper {
    border-radius: 1rem;
    min-width: 250px;
    box-shadow: 0 0 10px var(--gryphon-light-gray);
    padding: 1rem;
    flex: 3;
}

.button {
    border-radius: 1rem;
    font-size: 1.25rem;
    border: none;
    width: 90%;
    text-align: center;
    box-shadow: 0 0 10px var(--gryphon-light-gray);
    text-decoration: none;
    color: var(--gryphon-light-black);
    max-width: 250px;
    padding: 0.5rem;
    transition: 0.3s;
}

.button:hover {
    background-color: var(--gryphon-red);
}

.selected_car {
    background-color: var(--gryphon-red-transparent);
    color: var(--gryphon-white);
}

h1 {
    text-align: center;
    font-size: 5vw;
    font-weight: bolder;
    margin: 0;
}

.yellow_team {
    color: var(--gryphon-yellow);
}

.red_team {
    color: var(--gryphon-red-transparent);
}

.meet_the_team img {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    margin-left: 8vw;
    width: 60%;
    height: auto;
}

hr {
    border: 0;
    clear: both;
    display: block;
    width: 99%;
    background: linear-gradient(to right, var(--gryphon-white) 5%, var(--gryphon-red) 50%, var(--gryphon-white) 95%);
    height: 3px;
    border-radius: 50px;
}

h2 {
    text-align: center;
    margin: 0;
}
</style>
