'use strict';

module.exports = (pandora) => {
  pandora
    .env({
      PORT: '8001',
    })
    .cluster('./src/server/index.js');
};
