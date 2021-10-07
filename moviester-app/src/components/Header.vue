<template>
    <header>
        <p>Moviester</p>
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
        background-color: rgb(255, 196, 0);
        display: flex;
        margin-bottom: 32px;
        p {
            align-self: center;
            margin-left: 12px;
        }
    }
</style>