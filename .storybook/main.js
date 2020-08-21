module.exports = {
  stories: ['../stories/**/*.stories.js'],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        {
          loader: require.resolve('less-loader'),
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ]
    });

    return config;
  }
};
