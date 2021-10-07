<template>
    <button :class="btnclass">{{ text }}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        btnclass: String,
        text: String,
    }   
}
</script>

<style lang="scss">
.btn {
    font-size: 1.4rem;
    background-color: $col-bg-btn;
    color: $col-btn;
    padding: 4px;
    width: 58px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.4)
}
</style>
