// next.config.js
const withPlugins = require('next-compose-plugins')
const images = require('next-images')

const reactSvg = require('next-react-svg')
const path = require('path')

module.exports = withPlugins([
  [images, {
    /* config for next-optimized-images */
  }],
  [reactSvg, {
    include: path.resolve(__dirname, 'src/assets/svg'),
    webpack(config, options) {
      
      config.resolve.alias['swiper'] = path.resolve(__dirname, 'node_modules/swiper/js/swiper.min.js');
      return config
    }
  }]
])

