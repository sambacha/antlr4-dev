const path = require('path');
const webpack = require('webpack');

const config = {
    mode: "production",
    entry: './src/antlr4/index.js',
    output: {
        filename: 'antlr4.js',
        path: path.resolve(__dirname, 'dist'),
        // the name of the exported antlr4
        library: "antlr4",
        libraryTarget: 'window'
    },
resolve: {
        fallback: {
          fs: false,
          module: false,
          net: false
        }
      },
    target: "web",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                      ['@babel/preset-env', { "targets": "defaults" }]
                    ]
                  }
            }
        }]
    }
};
module.exports = config