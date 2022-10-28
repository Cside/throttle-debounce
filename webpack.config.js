const common = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // TODO: 後で削る
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {},
        },
        exclude: /node_modules/,
      },
    ],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
const commonJS = {
  ...common,
  output: {
    path: `${__dirname}/dist/cjs`,
    filename: 'index.js', // TODO: cjs にできるじゃん！ と後で追記
  },
};
commonJS.module.rules[0].use.options.configFile = 'tsconfig.cjs.json';

const esModule = {
  ...common,
  output: {
    path: `${__dirname}/dist/esm`,
    filename: 'index.js',
  },
};
esModule.module.rules[0].use.options.configFile = 'tsconfig.esm.json';

module.exports = [commonJS, esModule];
