'use strict';

module.exports = (pandora) => {
  pandora
    .cluster('./src/server/index.js');
};
