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
    padding: 8px;
    width: 58px;
    cursor: pointer;
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    border: none;
    align-self: center;
    &--gameover {
        width: 80px;
    }
    &--start {
        width: 96px;
        padding: 10px;
    }
}
</style>
