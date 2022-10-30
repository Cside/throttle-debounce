const common = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: ['maintained node versions'],
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ts?$/,
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
  ...structuredClone(common),
  output: {
    filename: 'index.cjs',
    path: `${__dirname}/dist/cjs`,
    library: {
      type: 'commonjs',
    },
  },
};
commonJS.module.rules[1].use.options.configFile = 'tsconfig.cjs.json';

const esModule = {
  ...structuredClone(common),
  experiments: {
    outputModule: true,
  },
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist/esm`,
    library: {
      type: 'module',
    },
  },
};
esModule.module.rules[1].use.options.configFile = 'tsconfig.esm.json';

module.exports = [commonJS, esModule];
