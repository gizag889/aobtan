const { name } = require('file-loader');
const { url } = require('inspector');
const { type } = require('os');
const path = require('path'); 
const loader = require('sass-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



// 'production' か 'development' を指定
const MODE = 'development';
// const MODE = 'production';


// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

// 出力ファイル指定のための設定`
// const path = require("path");
const glob = require("glob");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const srcDir = "./src";
const entries = glob
  .sync("**/*.js", {
    ignore: "**/_*.js",
    cwd: srcDir,
  })
  .map(function(key){
    return [key, path.resolve(srcDir, key)]
  });

  const entryObj = Object.fromEntries(entries);



module.exports = {
  // entry: './src/index.js',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'main.js',
  // },
  entry: entryObj,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]",
  },
    mode: MODE,
    // mode: production,

  module: {
    rules:[
      //sassファイルの読み込みとコンパイル
      {
        test: /\.(css|sass|scss)$/,
        // test: /\.scss/,
        use: [
          // linkタグに出力する機能
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
          },
          },
          {
            loader: "css-loader",
            options: {
              url: true,
              sourceMap: enabledSourceMap,
               // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [ 'autoprefixer', { grid: true } ],
                  [ 'cssnano', { preset: 'default' } ]
                ]
              },
            }
          },
          {
            loader: "sass-loader",
            options: {
             
              sourceMap: enabledSourceMap,
              api: "modern-compiler",
            },
          },
        ],
      },
          {
            test: /\.(gif|png|jpg|svg)$/,
            // 画像をBase64として取り込む
            type: "asset/inline",
            },
       
      // {
      //   // 対象となるファイルの拡張子
      //   test: /\.(png|jpg|gif|svg)/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'images/[name].[ext]'
      //       }
      //     }
      //   ]
     
      // }
    ],
  
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  // 容量分析
  // plugins: [
  //   new BundleAnalyzerPlugin(),
  // ],
    // ローカル環境を立ち上げる
    target: ["web", "es5"],

  devServer: {
    // 開くファイルの指定
    // contentBase: path.join(__dirname, 'dist'),
        static: path.resolve(__dirname, 'dist'),

    // static: dist,
    open: true,
    open: "about.html"
  }
};
        


