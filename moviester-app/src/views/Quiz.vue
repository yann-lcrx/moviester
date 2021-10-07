<template>
  <section class="quiz">
    <div class="quiz__heading">
      <div class="quiz__scores">
        <p>Score: {{ score }}</p>
        <p>Best: {{ score }}</p>
      </div>
      <p>Time: {{ time }}</p>
    </div>
    <div class="quiz__question">
      <div>
        <p><span class="quiz__variable">Léa Seydoux</span> a-t-elle joué dans <span class="quiz__variable">The Lobster</span> ?</p>
      </div>
      <div class="quiz__answer">
        <Button btnclass="btn btn__yes" text="Oui" />
        <Button btnclass="btn btn__no" text="Non" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue"

  export default {
    name: "Quiz",
    components: {
      Button
    },
    data() {
      return {
        score: 140,
        time: 60
      }
    }
  };
</script>

<style lang="scss">
  .quiz {
    font-size: 1.35rem;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    &__question {
      background-color: #FDFDFD;
      border: 1px lightgray solid;
      border-radius: 8px;
      padding: 12px;
      display: flex;
      flex-flow: column nowrap;
      font-size: 1.7rem;
      flex: 1;
      justify-content: center;
      p {
        margin-top: 0px;
      }
    }
    &__heading {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
    &__answer {
      width: 30%;
      display: flex;
      align-self: center;
      justify-content: space-evenly;
    }
    &__variable {
      color: $col-emphasis;
    }
    &__scores {
      display: flex;
      p {
        margin-right: 24px;
      }
    }
  }
  button {
    background-color: unset;
    border: 1px solid darkblue;
    color: darkblue;
    border-radius: 6px;
  }
</style>
