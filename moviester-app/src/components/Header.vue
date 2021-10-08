<template>
    <header>
        <router-link to="/"><p>Moviester</p></router-link>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss">
header {
    width: 100%;
    height: 120px;
    background-color: $col-layout;
    display: flex;
    margin-bottom: 32px;
    p {
        align-self: center;
        margin-left: 12px;
        font-family: "Godzilla", Arial, Helvetica, sans-serif;
    }
}
</style>