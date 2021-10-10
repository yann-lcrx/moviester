<template>
  <header>
    <div>
      <router-link to="/"
        ><img
          src="../assets/moviester-darkblue.png"
          alt="moviester logo"
          class="moviester-logo"
      /></router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
header {
  width: 100%;
  height: 105px;
  background-color: $col-layout;
  display: flex;
  margin-bottom: 48px;
  > div {
    max-width: $max-screen-width;
    flex: 1;
    margin: auto;
    text-align: initial;
  }
  p {
    align-self: center;
    margin-left: 12px;
    font-family: "Godzilla", Arial, Helvetica, sans-serif;
  }
  .moviester-logo {
    height: 32px;
    align-self: center;
  }
}
</style>
