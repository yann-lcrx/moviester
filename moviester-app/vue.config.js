module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_keyframes.scss";
          @import "@/scss/_variables.scss";
          
        `
      }
    }
  }
};