<template>
  <section class="quiz">
    <div class="quiz__heading">
      <div class="quiz__scores">
        <p>Score: {{ score }}</p>
        <p>Best: {{ highScore }}</p>
      </div>
      <p>Time: {{ time }}</p>
    </div>

    <div class="quiz__card">
      <div class="quiz__frame" v-if="time > 0 && actorPortait != null">
        <Image :imgSource="formatActorPortrait" :imgAlt="actor" />
      </div>
      <div class="quiz__main">
        <Spinner v-if="time > 0 && isLoading == true" />
        <div class="quiz__gameover" v-if="time <= 0">
          <p>Game over</p>
          <p>Your score: {{ score }}</p>
          <div class="quiz__buttons">
            <Button
              btnclass="btn btn--gameover"
              text="Retry"
              v-on:click="restartQuiz"
            />
          </div>
        </div>
        <div class="quiz__question" v-if="time > 0 && isLoading == false">
          <p>
            Did <span class="quiz__variable">{{ actor }}</span> play in
            <span class="quiz__variable">{{ film }}</span
            >?
          </p>
          <div class="quiz__buttons">
            <Button btnclass="btn btn__yes" text="Yes" v-on:click="checkYes" />
            <Button btnclass="btn btn__no" text="No" v-on:click="checkNo" />
          </div>
        </div>
      </div>
      <div class="quiz__frame" v-if="time > 0 && filmPoster != null">
        <Image :imgSource="formatFilmPoster" :imgAlt="film" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";
import Image from "@/components/Image.vue";
import Spinner from "@/components/Spinner.vue";
import MoviesApi from "@/services/api/movies.js";

export default {
  name: "Quiz",
  components: {
    Button,
    Image,
    Spinner,
  },
  data() {
    return {
      score: 0,
      highScore: 0,
      allowedTime: 60,
      time: 0,
      actor: "Léa Seydoux",
      actorPortait: "/7JAUieStGsHZAy6ed2WuFy4CJjm.jpg",
      actorId: 0,
      film: "The Lobster",
      filmPoster: "/nx3gldcChCfw7QwPdssSG9CPaok.jpg",
      filmId: 0,
      movie: {},
      isLoading: false,
      isCorrect: true,
    };
  },
  computed: {
    formatActorPortrait() {
      return (
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/" +
        this.actorPortait
      );
    },
    formatFilmPoster() {
      return (
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + this.filmPoster
      );
    },
  },
  methods: {
    decrementTimer() {
      this.time--;
    },
    setTimer() {
      this.time = this.allowedTime;
      var timerInterval = setInterval(this.decrementTimer, 1000);
      setTimeout(function () {
        clearInterval(timerInterval);
      }, (this.time + 1) * 1000);
    },
    incrementScore() {
      this.score++;
    },
    resetScore() {
      this.score = 0;
    },
    setNewHighscore() {
      this.highScore = this.score;
      localStorage.setItem("high score", this.highScore);
    },
    getHighScore() {
      this.highScore = localStorage.getItem("high score");
    },
    async getAnyMovie() {
      //as long as id is not a valid movie id
      while (this.film == "" && this.time > 0) {
        //generates random movie id
        let id = Math.ceil(Math.random() * 1000);
        await MoviesApi.getMovie(id)
          .then((movie) => {
            this.film = movie.title;
            this.filmPoster = movie.poster_path;
            this.filmId = movie.id;
          })
          .catch((err) => console.log(err));
      }
    },
    async getMovieCredits(id) {
      await MoviesApi.getMovieCredits(id)
        .then((people) => {
          this.actorId = people.cast[0].id;
        })
        .catch((err) => console.log(err));
    },
    async getActor(id) {
      await MoviesApi.getActor(id)
        .then((actor) => {
          this.actor = actor.name;
          this.actorPortait = actor.profile_path;
        })
        .catch((err) => console.log(err));
    },
    async getAnyActor() {
      //as long as id is not a valid actor id
      while (this.actor == "" && this.time > 0) {
        //generates random actor id
        let id = Math.ceil(Math.random() * 1000);
        await MoviesApi.getActor(id)
          .then((actor) => {
            this.actor = actor.name;
            this.actorPortait = actor.profile_path;
            this.actorId = actor.id;
          })
          .catch((err) => console.log(err));
      }
    },
    async checkIfActorIsInFilm(actorId, filmId) {
      await MoviesApi.getMovieCredits(filmId)
        .then((people) => {
          for (let actor of people.cast) {
            if (actor.id == actorId) {
              return (this.isCorrect = true);
            }
          }
        })
        .catch((err) => console.log(err));
    },
    clearInfo() {
      this.actor = "";
      this.actorId = 0;
      this.film = "";
      this.filmId = 0;
    },
    async updateInfo() {
      this.isLoading = true;
      this.clearInfo();
      //coin toss to determine if next question will be right or wrong
      this.isCorrect = Math.random() < 0.5;
      await this.getAnyMovie();
      if (this.isCorrect == true) {
        await this.getMovieCredits(this.filmId);
        this.getActor(this.actorId);
      } else {
        await this.getAnyActor();
        this.checkIfActorIsInFilm(this.actorId, this.filmId);
      }
      this.isLoading = false;
    },
    checkYes() {
      if (this.isCorrect == true) {
        this.incrementScore();
      }
      this.updateInfo();
    },
    checkNo() {
      if (this.isCorrect == false) {
        this.incrementScore();
      }
      this.updateInfo();
    },
    startQuiz() {
      this.getHighScore();
      this.resetScore();
      this.setTimer();
      this.updateInfo();
    },
    restartQuiz() {
      if (this.highScore < this.score) {
        this.setNewHighscore();
      }
      this.startQuiz();
    },
  },
  mounted() {
    this.startQuiz();
  },
};
</script>

<style lang="scss">
.quiz {
  font-size: 1.35rem;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;

  &__card {
    background-color: #fdfdfd;
    border: 1px lightgray solid;
    border-radius: 8px;
    padding: 12px;
    padding-left: 16px;
    padding-right: 16px;
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    > div {
      align-self: center;
      > div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        font-size: 1.65rem;
      }
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
    width: 240px;
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

  &__frame {
    flex: 0.35;
  }

  &__main {
    flex: 1;
    margin-left: 12px;
    margin-right: 12px;
  }

  &__gameover {
    p:first-child {
      font-weight: bold;
    }
    p:nth-child(2) {
      color: $col-emphasis;
    }
    animation: menu-appear 1800ms ease-out forwards;
  }

  &__question {
    opacity: 0;
    animation: menu-appear 350ms ease-out forwards;
  }
}
</style>
