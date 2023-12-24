import path from 'path';
import webpack from 'webpack';

export default {
  entry: "./index.js",
  output: {
    // output bundle will be in `dist/buit.js`
    filename: `bundle.js`,
    path: path.resolve(__dirname,'dist')
  },
  target: 'node',
  mode: 'production',
  // optional: bundle everything into 1 file
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],
};
