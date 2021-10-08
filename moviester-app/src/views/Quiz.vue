<template>
  <section class="quiz">
    <div class="quiz__heading">
      <div class="quiz__scores">
        <p>Score: {{ score }}</p>
        <p>Best: {{ score }}</p>
      </div>
      <p>Time: {{ time }}</p>
    </div>
    <div class="quiz__card">
      <div class="quiz__gameover" v-if="time <= 0">
        <p>Game over</p>
        <div class="quiz__buttons">
          <Button btnclass="btn btn--gameover" text="Retry" v-on:click="resetTimer"/>  
        </div>
      </div>
      <div class="quiz__question" v-if="time > 0">
        <div>
          <p>Did <span class="quiz__variable">{{ actor }}</span> play in <span class="quiz__variable">{{ film }}</span>?</p>
        </div>
        <div class="quiz__buttons">
          <Button btnclass="btn btn__yes" text="Yes" />
          <Button btnclass="btn btn__no" text="No" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";
import MoviesApi from "@/services/api/movies.js";

  export default {
    name: "Quiz",
    components: {
      Button
    },
    data() {
      return {
        score: 140,
        allowedTime: 15,
        time: 15,
        actor: 'Léa Seydoux',
        film: 'The Lobster',
        movie: {}
      }
    },
    methods: {
      decrement() {
        this.time--
      },
      resetTimer() {
        this.time = this.allowedTime;
      }
    },
    mounted () {
      MoviesApi.getMovie()
        .then(movie => {
          this.film = movie.title;
        })
        .catch (err => console.log(err))
      MoviesApi.getActor()
        .then(actor => {
          console.log(actor)
        })
        .catch (err => console.log(err))
      var timerInterval = setInterval(this.decrement, 1000);
      setTimeout(function() {
        clearInterval(timerInterval)
      }, (this.time + 1) * 1000)
    }
  }
</script>

<style lang="scss">
.quiz {
  font-size: 1.35rem;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  &__card {
    background-color: #FDFDFD;
    border: 1px lightgray solid;
    border-radius: 8px;
    padding: 12px;
    flex: 1;
    display: flex;
    justify-content: center;
    > div {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      font-size: 1.7rem;
    }
    p {
      margin-top: 0px;
    }
  }
  &__heading {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  &__buttons {
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
