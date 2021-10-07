<template>
  <section class="quiz">
    <div class="quiz__heading">
      <p>Score: 150</p>
      <p>Temps: 60</p>
    </div>
    <div class="quiz__question">
      <div>
        <p><span class="quiz__variable">Léa Seydoux</span> a-t-elle joué dans <span class="quiz_variable">The Lobster</span> ?</p>
      </div>
      <div class="quiz__answer">
        <button>Oui</button>
        <button>Non</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Quiz",
  };
</script>

<style lang="scss">
  .quiz {
    &__question {
      background-color: #FDFDFD;
      border: 1px lightgray solid;
      border-radius: 12px;
      padding: 12px;
      display: flex;
      flex-flow: column nowrap;
    }
    &__heading {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
    &__answer {
      width: 120px;
      display: flex;
      align-self: center;
    }
  }
  button {
    background-color: unset;
    border: 1px solid darkblue;
    color: darkblue;
    border-radius: 6px;
  }
</style>
