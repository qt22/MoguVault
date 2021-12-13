module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/sass/_vars.scss";
          @import "~@/sass/_breakpoints.scss";
          @import "~@/sass/_layouts.scss";
        `
      }
    }
  }
};
