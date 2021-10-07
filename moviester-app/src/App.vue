<template>
  <div id="moviester-app">
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
    color: $col-font;
    background-color: $col-background;
  }
  .page-body {
    margin: auto;
    max-width: 900px;
    min-height: 65%;
    display: flex;
    flex-flow: column nowrap;
  }
  html, body, #app, #moviester-app {
    height: 100%;
  }
</style>