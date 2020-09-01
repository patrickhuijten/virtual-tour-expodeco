module.exports = {
    css: {
      loaderOptions: {
        sass: {
            additionalData: `@import "@/assets/scss/transitions.scss";`
        }
      }
    },
    configureWebpack: {
        devServer: {
          headers: { 'Access-Control-Allow-Origin': '*' }
        }
      }
  };