module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? ''
        : '/',
    devServer: {
        disableHostCheck: true,
        open: true,
        proxy: 'http://47.93.199.16:5220'
    },
}