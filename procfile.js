'use strict';

module.exports = (pandora) => {
  pandora
    .process('blog')
    .cluster('./src/server/index.js');
};
