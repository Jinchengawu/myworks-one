const autoprefixer = require('autoprefixer')
// const pxtorem = require('postcss-pxtorem')

const DOMAIN = process.env.NODE_ENV === 'production' ? 'http://scrm.ocheng.me/v2' :
  'http://v2.ocheng.me'
module.exports = {
  //测试
  publicPath: process.env.NODE_ENV === 'production' ? '/h5/fuli/' : 'h5/fuli/',
  // 正式
  // publicPath: process.env.NODE_ENV === 'production' ? '/h5/fuli' : '/h5/fuli',
  configureWebpack: {
    resolve: {
      // 别名设置
      alias: {
        '@assets': '@/assets',
        '@img': '@/assets/img',
        '@less': '@/assets/less',
        '@components': '@/components',
        '@views': '@/views',
        '@utils': '@/utils',
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        // target: DOMAIN,
        target: 'http://v2.ocheng.me', //后端接口地址
        changeOrigin: true, //是否允许跨越
        pathRewrite: {
          '^/api': '/api', //重写,
        }
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(), // 自动加兼容性前缀
          // pxtorem({ // px 自动转 rem , 除以100
          //   rootValue: 100,
          //   propList: ['*'],
          // }),
        ],
      },
    },
  },

  lintOnSave: false,
}
