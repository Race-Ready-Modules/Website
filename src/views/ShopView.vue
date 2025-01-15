<script setup lang="ts">
import ShopItem from "@/components/ShopItem.vue";

const products = [
    {
        title: "AIL Driver",
        price: "Price: TBD",
        comps: ["FH+E", "FSAE", "FSG", "FSUK"],
    },
    {
        title: "BSPD Logic Module",
        price: "Price: TBD",
        comps: ["FSAE"],
    },
    {
        title: "TSAL/RTML Driver",
        price: "Price: TBD",
        comps: ["FSAE"],
    },
    {
        title: "PC/DC Driver",
        price: "Price: TBD",
        comps: ["FSAE"],
        img: "/teams/gryphon_racing/A.jpg",
    },
];
</script>

<template>
    <div class="team">
        <hr />
        <div class="profiles_list">
            <template v-for="item in products" :key="item.title">
                <ShopItem :title="item.title" :price="item.price" :comps="item.comps.join(', ')" :img="`/products/${item.title}/preview.png`" />
            </template>
        </div>
        <hr />
    </div>
</template>

<style scoped>
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
    max-width: 1200px;
}

h1 {
    text-align: center;
    font-size: 5vw;
    font-weight: bolder;
    margin: 0;
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
