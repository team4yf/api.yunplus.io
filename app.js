const Fpm = require('yf-fpm-server').Fpm;
const biz = require('./lib').default;

const fpm = new Fpm()
fpm.addBizModules(biz(fpm))

fpm.run()

