<template>
    <footer>
        <p>© Moviester 2021, tous droits réservés</p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss">
    footer {
        width: 100%;
        height: 120px;
        background-color: $col-layout;
        display: flex;
        justify-content: center;
        margin-top: 32px;
    }
</style>