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
      <div class="quiz__frame" v-if="time > 0">
        <Image :imgSource="formatActorPortrait" :imgAlt="actor"/>
      </div>
      <div class="quiz__main">
        <div class="quiz__gameover" v-if="time <= 0">
          <p>Game over</p>
          <div class="quiz__buttons">
            <Button btnclass="btn btn--gameover" text="Retry" v-on:click="restartQuiz"/>  
          </div>
        </div>
        <div class="quiz__question" v-if="time > 0">
          <p>Did <span class="quiz__variable">{{ actor }}</span> play in <span class="quiz__variable">{{ film }}</span>?</p>
          <div class="quiz__buttons">
            <Button btnclass="btn btn__yes" text="Yes" v-on:click="checkYes" />
            <Button btnclass="btn btn__no" text="No" v-on:click="checkNo" />
          </div>
        </div>
      </div>
      <div class="quiz__frame" v-if="time > 0">
        <Image :imgSource="formatFilmPoster" :imgAlt="film"/>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";
import Image from "@/components/Image.vue";
import MoviesApi from "@/services/api/movies.js";

  export default {
    name: "Quiz",
    components: {
      Button, Image
    },
    data() {
      return {
        score: 0,
        highScore: 0,
        allowedTime: 10,
        time: 0,
        actor: 'Léa Seydoux',
        actorPortait: '/7JAUieStGsHZAy6ed2WuFy4CJjm.jpg',
        actorId: 0,
        film: 'The Lobster',
        filmPoster: '/nx3gldcChCfw7QwPdssSG9CPaok.jpg',
        movie: {},
        isLoading: false,
        isCorrect: true,
      }
    },
    computed: {
      formatActorPortrait() {
        return 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + this.actorPortait
      },
      formatFilmPoster() {
        return 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' + this.filmPoster
      }
    },
    methods: {
      decrementTimer() {
        this.time--
      },
      setTimer() {
        this.time = this.allowedTime;
        var timerInterval = setInterval(this.decrementTimer, 1000);
        setTimeout(function() {
          clearInterval(timerInterval);
          this.setNewHighscore();
        }, (this.time + 1) * 1000)
      },
      incrementScore() {
        this.score++
      },
      resetScore() {
        this.score = 0;
      },
      setNewHighscore() {
        this.highScore = this.score;
        localStorage.setItem('high score', this.highScore);
      },
      getHighScore() {
        this.highScore = localStorage.getItem('high score');
      },
      getMovie(id) {
        MoviesApi.getMovie(id)
          .then(movie => {
            this.film = movie.title;
            this.filmPoster = movie.poster_path;
          })
          .catch (err => console.log(err))
      },
      getMovieCredits(id) {
        MoviesApi.getMovieCredits(id)
          .then(people => {
            this.actorId = people.cast[0].id;
          })
          .catch (err => console.log(err))
      },
      getActor(id) {
        MoviesApi.getActor(id)
          .then(actor => {
            this.actor = actor.name;
            this.actorPortait = actor.profile_path
          })
          .catch (err => console.log(err))
      },
      updateInfo() {
        this.isLoading = true;
        //coin toss to determine if next question will be right or wrong
        this.isCorrect = Math.random() < 0.5;
        console.log(this.isCorrect);
        //generate random movie id
        let id = Math.ceil(Math.random() * 1000);
        this.getMovie(id);
        if (this.isCorrect == true) {
          this.getMovieCredits(id);
          this.getActor(this.actorId);
        } else {
          id = Math.ceil(Math.random() * 1000);
          this.getActor(id);
        }
        this.isLoading = false;
      },
      checkYes() {
        if (this.isCorrect == true) {
          this.incrementScore()
        }
        this.updateInfo();
      },
      checkNo() {
        if (this.isCorrect == false) {
          this.incrementScore()
        }
        this.updateInfo();
      },
      startQuiz() {
        this.getHighScore();
        this.resetScore();
        this.setTimer();
      },
      restartQuiz() {
        if (this.highScore < this.score) {
          this.setNewHighscore();
        }
        this.startQuiz();
      }
    },
    mounted () {
      this.startQuiz()
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
}
</style>
