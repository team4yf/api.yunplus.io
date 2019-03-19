const { Fpm } = require('yf-fpm-server');
const bizBuilder = require('./biz');

const fpm = new Fpm()
fpm.addBizModules(bizBuilder(fpm))

fpm.run()
  .then(fpm => {
    // TODO sth.
    console.log('...')
  })