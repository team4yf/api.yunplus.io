import { Fpm, Hook,Biz }  from 'yf-fpm-server';
//加载配置信息的中间件，默认通过编码中的代码信息加载
import configuration from './config.js';

import biz from './biz/index.js';

global.__env = 'DEV';
let fpm = new Fpm();

fpm.use(configuration);

fpm.addBizModules(biz);

const httpPort = 9991;

fpm.run(httpPort);
