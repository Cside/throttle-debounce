const common = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.ts',
  // resolve: {
  //   extensions: ['.ts'],
  // },
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
    library: {
      type: 'commonjs',
    },
  },
};
commonJS.module.rules[0].use.options.configFile = 'tsconfig.cjs.json'; // TODO: ./ だとエラー

const esModule = {
  ...common,
  experiments: {
    outputModule: true,
  },
  output: {
    path: `${__dirname}/dist/esm`,
    library: {
      type: 'module',
    },
  },
};
esModule.module.rules[0].use.options.configFile = 'tsconfig.esm.json';

module.exports = [commonJS, esModule];
