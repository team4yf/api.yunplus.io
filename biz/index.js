import _ from 'lodash'
import { Biz }  from 'yf-fpm-server'
import M from '../M.js'
import common from './common.js'
import application from './application.js'
import user from './user.js'

let biz = new Biz('0.0.1')

biz.addSubModules('common', common)
biz.addSubModules('user', user)
biz.addSubModules('application', application)

export default biz
