module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/sass/_breakpoints.scss";
          @import "~@/sass/_fonts.scss";
          @import "~@/sass/_layouts.scss";
        `
      }
    }
  }
};
