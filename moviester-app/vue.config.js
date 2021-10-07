module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss", "@/scss/_typography.scss";
        `
      }
    }
  }
};