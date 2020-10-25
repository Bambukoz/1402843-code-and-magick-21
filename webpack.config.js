const path = require(`path`);

module.exports = {
  entry: [
    `./js/stat.js`,
    `./js/util.js`,
    `./js/debounce.js`,
    `./js/filter.js`,
    `./js/backend.js`,
    `./js/setup.js`,
    `./js/error.js`,
    `./js/colorize.js`,
    `./js/wizard-generator.js`,
    `./js/move.js`,
    `./js/game.js`
  ],
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
}
