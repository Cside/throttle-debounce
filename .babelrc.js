module.exports = {
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
};
