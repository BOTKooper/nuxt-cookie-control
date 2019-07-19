const path = require('path');

module.exports = function cookies (_options) {
  const defaultOptions = {
    ...this.options.cookies,
    css: true,
    barPosition: 'bottom-full',
    iframe: path.resolve(__dirname, '../components/CookieIframe.vue'),
    component: path.resolve(__dirname, '../components/CookieControl.vue'),
  }

  let options = Object.assign(defaultOptions, _options);

  if(options.css) this.options.css.push(path.resolve(__dirname, '../lib/styles.scss'));

  if(options.blockIframe === true){
    options.optional.push({
      name: 'functional',
      initialState: true
    })

    this.extendBuild((config ) => {
      config.module.rules.push({
        test: /\.vue$/,
        loader: 'string-replace-loader',
        exclude: /node_modules/,
        options: {
          multiple: [
            { search: '<iframe', replace: '<CookieIframe', flags: 'g' },
            { search: '</iframe>', replace: '</CookieIframe>', flags: 'g' }
          ],
        }
      })
    })
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-cookie-control.js',
    ssr: false,
    options
  })
}

module.exports.meta = require('../package.json')