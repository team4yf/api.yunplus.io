import { Fpm }  from 'yf-fpm-server'
import biz from './biz'

let fpm = new Fpm()

fpm.addBizModules(biz(fpm))

fpm.run()

export default fpm
