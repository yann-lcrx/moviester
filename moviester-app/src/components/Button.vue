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
    position: relative;
    z-index: 1;
    font-size: 1.4rem;
    background: $col-bg-btn;
    background: linear-gradient(180deg, $col-bg-btn 0%, darken($col-bg-btn, 5%) 64%, darken($col-bg-btn, 15%) 96%);
    color: $col-btn;
    padding: $rds-btn;
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
    &:hover{
        &::after{
            opacity:1;
            border-radius: $rds-btn;
        }
    }
    &::after {
        content: "";
        border-radius: $rds-btn;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;  
        left: 0;
        opacity: 0;
        z-index: -1;
        background: linear-gradient(180deg, lighten($col-bg-btn, 7%) 0%, lighten(darken($col-bg-btn, 5%), 7%) 64%, lighten(darken($col-bg-btn, 15%), 7%) 96%);
        box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.25);
        transition: opacity 250ms;
    }
}
</style>
