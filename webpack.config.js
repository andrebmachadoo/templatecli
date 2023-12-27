//  import fs from 'fs';

const config = {
  entry: './src/index.js',
  experiments: {
    outputModule: true, // Habilita a saída do Webpack como um módulo ESM
  },
  output: {
    // path: path.resolve(new URL('.', import.meta.url).pathname, 'dist'),
    path:process.env.PWD,
    filename: 'dist/bundle.js',
    module: true, // Habilita a criação de um módulo ESM
    publicPath: '/dist/',
    environment: {
      module: true, // Indica ao Webpack para usar módulos ESM
    },
  },
  externals: {
    fs: 'commonjs fs' 
  },
  // outras configurações...
  /*
  module: {
    rules: [
      // Regra para arquivos JavaScript usando Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Loader para transpilar o código ES6
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // Adicione outras regras conforme necessário para processar diferentes tipos de arquivos
    ],
  },
  */
};

export default config;
