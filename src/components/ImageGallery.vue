<script setup lang="ts">
const props = defineProps<{ images: string[] }>();

// Handy Swiper JS Examples: https://swiperjs.com/demos
import type { PaginationOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Pagination, Autoplay];

const options: PaginationOptions = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
};
</script>

<template>
    <div class="wrapper">
        <swiper :spaceBetween="30" :pagination="options" :modules="modules">
            <swiper-slide v-for="image in props.images" :key="image">
                <img :src="`${image}`" alt="Image Gallery" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<style scoped>
.wrapper {
    border-radius: 1rem;
    overflow: hidden;
}
.swiper-slide img {
    border-radius: 1rem;
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>
