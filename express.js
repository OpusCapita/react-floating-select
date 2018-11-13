const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '/examples-build')));

app.listen(3000, () => {
  console.log('OpusCapita 5G static front server listening on port 3000!');
});
