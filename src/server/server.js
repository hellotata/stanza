const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

if(process.env.NODE_ENV === 'hotreload') {
  console.log('DEVELOPMENT ENVIRONMENT: Hot Reloading...');

  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const webpackHotConfig = require('../../hot.config');
  const compiler = webpack(webpackHotConfig);

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackHotConfig.output.publicPath,
    noInfo: true
  }));

  app.use(webpackHotMiddleware(compiler, {
    reload: true
  }));
}

app.use(express.static(path.join(__dirname, '../../dist/assets')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
})

app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}...`);
});