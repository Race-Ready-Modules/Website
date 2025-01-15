<template>
    <div class="footer">
        <div class="contact_info">
            <h2 style="margin-bottom: 2px">Contact us at:</h2>
            <a href="mailto:racereadymodules@gmail.com" class="contact_email">racereadymodules@gmail.com</a>
        </div>

        <img class="banner" src="/media/logos/RevOutline-WIDERaceReadyModules.png" alt="Gryphon Racing Banner" />
    </div>
</template>

<style scoped>
.footer {
    width: 100%;
    color: var(--gryphon-red);
    text-align: center;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    padding: 50px 0;
    flex-grow: 0;
}

.contact_email {
    text-decoration: none;
    color: var(--gryphon-dark-white);
}

.contact_info {
    text-align: left;
    line-height: 170%;
}

.banner {
    width: 50vw;
    max-width: 600px;
    filter: var(--red-filter);
}

@media screen and (max-width: 900px) {
    .footer {
        flex-direction: column;
    }

    .footer > * {
        margin: 10px 0;
    }

    .contact_info {
        text-align: center;
    }

    .banner {
        width: 80vw;
        margin-top: 40px;
        margin-bottom: 40px;
        filter: var(--red-filter);
    }
}
</style>
