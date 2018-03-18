'use strict';

module.exports = (pandora) => {
  pandora
    .env({
      PORT: '8001',
    })
    .entry('./src/server/index.js');
};
