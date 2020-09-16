module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/scss/main.scss";`
            }
        }
    },
    configureWebpack: {
        devServer: {
            headers: { 'Access-Control-Allow-Origin': '*' }
        }
    }
};