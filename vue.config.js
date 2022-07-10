const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath: "/Claudio-Rodriguez/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/style/main.scss";`,
      },
    },
  },
};
