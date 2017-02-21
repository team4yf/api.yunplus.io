import { Fpm, Hook,Biz }  from 'yf-fpm-server'
import _ from 'lodash'
//加载配置信息的中间件，默认通过编码中的代码信息加载
import configuration from './config'
import biz from './biz'

global.__env = 'DEV'
global.__startTime = _.now()

let fpm = new Fpm()

fpm.use(configuration)

fpm.addBizModules(biz(fpm))

const httpPort = 9991

fpm.run(httpPort)

export default fpm
