<script setup lang="ts">
import ImageGallery from "@/components/ImageGallery.vue";

const props = defineProps<{ item: number | string }>();
</script>

<template>
    <div class="team">
        <hr />
        <div class="row">
            <div class="gallery-wrapper">
                <ImageGallery :images="[`/products/AIL Driver/front.png`, `/products/AIL Driver/back.png`]" />
            </div>
            <div class="description_wrapper">
                <h2>{{ props.item }}</h2>
                <hr />

                <p>This AIL Driver is a reliable, 600V, constant current driver available for LED or Neon Lamp Indicators.</p>
                <p>Available with current limits of 1mA, 5mA, & 10mA. For LEDs, typical threshold of 51V + Vf.</p>
                <p>Footprint area of 0.72in<sup>2</sup>!</p>

                <p>Legal for the following rulesets:</p>
                <ul>
                    <li>Formula Hybrid + Electric</li>
                    <li>Formula SAE Electric</li>
                    <li>Formula Student Germany</li>
                    <li>Formula Student UK</li>
                </ul>

                <div class="button-wrapper">
                    <button>Express Interest!</button>
                </div>

                <p></p>

                <div class="links-wrapper">
                    <h2>Documents</h2>
                    <a href="/media/club_docs/Constitution.pdf" target="_blank">Datasheet</a>
                    <hr />
                    <!-- <a href="/media/club_docs/Individual_Responsibility_Signoff.pdf" target="_blank">Docs</a>
                    <hr /> -->
                </div>
            </div>
        </div>
        <hr />
    </div>
</template>

<style scoped>
a {
    display: block;
    font-size: 1rem;
    text-decoration: none;
    padding-top: 1rem;
    padding-left: 0.5rem;
    color: black;
    transition-duration: 0.2s;
}
a:hover {
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

@media screen and (max-width: 700px) {
    .row {
        flex-direction: column;
    }
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
    padding: 1rem;
    flex: 2;
}

.description_wrapper {
    border-radius: 1rem;
    min-width: 250px;
    box-shadow: 0 0 10px var(--gryphon-light-gray);
    padding: 1rem;
    flex: 3;
}

button {
    border-radius: 1rem;
    font-size: 1.25rem;
    border: none;
    width: 90%;
    max-width: 250px;
    padding: 0.5rem;
    transition: 0.3s;
}

button:hover {
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

a {
    text-decoration: none;
}

.profiles_list {
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 2em;
}

.profiles_list > * {
    margin: 0.5em;
}

@media screen and (max-width: 1000px) {
    .title {
        display: flex;
    }

    h1 {
        font-size: 8vw;
        margin: 1vw;
    }

    .meet_the_team {
        flex-direction: column;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 3rem;
    }

    .meet_the_team img {
        margin: 0;
        width: 95%;
    }
}
</style>
