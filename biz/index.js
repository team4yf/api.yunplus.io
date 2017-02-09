import _ from 'lodash'
import { Biz }  from 'yf-fpm-server'
import M from '../M'
import common from './common'
import application from './application'
import user from './user'
import system from './system'

let biz = new Biz('0.0.1')

biz.addSubModules('common', common)
biz.addSubModules('user', user)
biz.addSubModules('application', application)
biz.addSubModules('system', system)

export default biz
