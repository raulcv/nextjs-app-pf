const path = require('path')
const withTM = require('next-transpile-modules')(['@unicorndesign/core', '@unicorndesign/react', '@stencil/core']);
module.exports = withTM({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // transpileModules: ['@iconscout/react-unicons'],
  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      // Include a dummy HTMLElement replacement
      config.plugins.push(new webpack.DefinePlugin({
        HTMLElement: '(class {})'
      }));
    }
  },
  devIndicators: {
    autoPrerender: false,
  },
});
