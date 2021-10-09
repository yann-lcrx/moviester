<template>
    <section class="home">
        <h1>Welcome to <span class="emphasis">Moviester</span>!</h1>
        <div>
            <div class="home__instructions align">
                <h2>Are you a movie genius?</h2>
                <p>Answer the questions in limited time and set a new high score!</p>
                <router-link to="/quiz">
                    <Button btnclass="btn btn--start" text="Start!"/>
                </router-link>
            </div>
            <div class="home__logo">
                <img src="@/assets/logo.png" alt="movie logo">
            </div>    
        </div>
    </section>
</template>

<script>
import Button from "@/components/Button.vue"

export default {
    name: "Home",
    components: {
        Button
    }
}
</script>

<style lang="scss">
    .home{
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        > div {
            display: flex;
            flex-flow: row nowrap;
            flex: 1;
            justify-content: space-between;
        }
        &__instructions {
            align-self: start;
            text-align: start;
            display: flex;
            flex-flow: column nowrap;
            p {
                margin-bottom: 48px;
            }
        }
        &__logo{
            align-self: baseline;
            flex: 0.7;
            img {
                opacity: 0.3;
                width: 100%;
            }
        }
    h1 {
        align-self: start;
        font-size: 2.3rem;
        margin-bottom: 16px;
    } 
    }
    h2 {
        margin-top: 0px;
        font-size: 1.55rem;
        margin-bottom: 8px;
    }
    .align {
        align-self: center;
    }
    .emphasis {
        color: $col-emphasis;
    }
    a {
        align-self: center;
    }
</style>