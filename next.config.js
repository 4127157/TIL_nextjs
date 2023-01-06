const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? '/TIL_nextjs/src/' : '',
    images: {
        unoptimized: true,
    },
}
