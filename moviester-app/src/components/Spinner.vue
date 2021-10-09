<template>
    <div id="loading" class="loading">
        <p><span class="loading__spinner loading__spinner--1">.</span>
            <span class="loading__spinner loading__spinner--2">.</span>
            <span class="loading__spinner loading__spinner--3">.</span></p>
    </div>
</template>

<script>
export default {
    name: "Spinner"
}
</script>

<style lang="scss">
@keyframes loader-blink{
    0%{
        opacity: 0.5;
    }
    100%{
        opacity: 0.1;
    }
}

    #loading {
        font-size: 12rem;
        font-family: 'Times New Roman', Times, serif;
        position: relative;
        z-index: 6;
    }
    .loading {
        &__spinner {
            animation: loader-blink 0.3s ease-in-out alternate infinite;
        }
    }
</style>