const presets  = [
  [
    '@babel/preset-env',
    {
      "targets": [">0.25% in JP", "not ie <= 10", "not op_mini all"]
    }
  ]
];

module.exports = {
  mode   : 'development',
  devtool: 'inline-source-map',
  entry  : './src/app.js',
  output : {
    path    : `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.js$/,
        use : [
          {
            loader : 'babel-loader',
            options: {
              presets: presets
            }
          }
        ]
      }
    ]
  }
};