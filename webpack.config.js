// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // or 'production' for production build
  entry: './src/index.tsx', // entry point of your application
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/, // SVG files
        use: ['@svgr/webpack'], // Use SVGR to import SVG as React components
      },
      // Other loaders can be added here
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // file extensions to resolve
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // output directory
  },
};
