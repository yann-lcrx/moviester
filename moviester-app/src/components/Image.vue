<template>
    <img class="movie-image" :src="imgSource" :alt="imgAlt">
</template>

<script>
export default {
    name: "Image",
    props: {
        imgSource: String,
        imgAlt: String
    }
}
</script>

<style lang="scss">
    .movie-image {
        width: 100%;
        border-radius: 8px;
        border: 1px solid lightgray;
        box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
    }
</style>