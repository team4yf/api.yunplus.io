import _ from 'lodash'
import { Biz }  from 'yf-fpm-server'
import common from './common'
import application from './application'
import user from './user'
import system from './system'
import baidu from './baidu'

export default (fpm) =>{
  let biz = new Biz('0.0.1', fpm)
  biz.addSubModules('common', common)
  biz.addSubModules('user', user)
  biz.addSubModules('application', application)
  biz.addSubModules('system', system)
  biz.addSubModules('baidu', baidu)
  return biz
}
