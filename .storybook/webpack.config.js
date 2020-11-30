module.exports = ({ config }) => {
  // Fix “Error: spawn ENOMEM”
  // https://discuss.circleci.com/t/build-fails-with-error-spawn-enomem/30537/5
  // config.optimization = {
  //   ...config.optimization,
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       parallel: true,
  //     }),
  //   ],
  // };
  config.optimization.minimizer[0].parallel = true;
  return config;
};
