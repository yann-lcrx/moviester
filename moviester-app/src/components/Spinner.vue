<template>
  <div id="loading" class="loading">
    <p>
      <span class="loading__spinner loading__spinner--1">.</span>
      <span class="loading__spinner loading__spinner--2">.</span>
      <span class="loading__spinner loading__spinner--3">.</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style lang="scss">
#loading {
  font-size: 12rem;
  font-family: "Times New Roman", Times, serif;
  position: relative;
  z-index: 6;
}
.loading {
  &__spinner {
    opacity: 0.5;
    animation: loader-blink 0.3s ease-in-out alternate infinite;
    @for $i from 1 through 3 {
      &--#{$i} {
        animation-delay: 30ms * ($i - 1);
      }
    }
  }
}
</style>
