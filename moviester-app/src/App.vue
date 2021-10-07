<template>
  <div id="app">
    <Header />
    <div class="page-body" role="main">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default {
  name: "App",
  components : {
    Footer, Header
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #152d46;
    background-color: rgb(230, 230, 230);
  }
  .page-body {
    margin: auto;
    max-width: 900px;
  }
</style>