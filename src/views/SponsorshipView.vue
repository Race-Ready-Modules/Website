<script setup lang="ts">
// import LeadProfile from "@/components/LeadProfile.vue";
</script>

<template>
    <div class="team">
        <div class="meet_the_team">
            <div class="title">
                <h1>Sponsorship Program</h1>
            </div>

            <p>
                As part of our commitment to advancing Formula Student, Race Ready Modules offers a sponsorship program to support ambitious teams striving for excellence. Sponsorship packages are
                designed to reduce financial strain while providing access to our selection of modules and expertise.
            </p>

            <div class="button-wrapper">
                <a class="button" href="mailto:racereadymodules@gmail.com?subject=Race Ready Modules Sponsorship">Apply for a Sponsorship!</a>
            </div>
        </div>

        <h2>Sponsored Teams</h2>
        <hr />
        <div class="title">
            <h1>Be the first!</h1>
        </div>
        <hr />
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
}

.button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
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
    max-width: 350px;
    padding: 0.5rem;
    transition: 0.3s;
}

.button:hover {
    background-color: var(--gryphon-red);
}

.team {
    background-color: var(--gryphon-white);
    padding: 7em 2em 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gryphon-light-black);
    flex-grow: 1;
}

.meet_the_team {
    padding-left: 15%;
    padding-right: 15%;
    padding-bottom: 5%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 600px;
    flex-flow: column;
}

h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: bolder;
    margin: 0;
}

h2 {
    text-align: center;
    margin: 0;
}

.red_team {
    color: var(--gryphon-red-transparent);
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

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
}

.title > h1 {
    display: inline;
}
</style>
