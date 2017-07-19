import _ from 'lodash'
import { Biz }  from 'yf-fpm-server'
import common from './common'
import application from './application'
import user from './user'
import system from './system'
import table from './table'
import webhook from './webhook'

export default (fpm) =>{
  let biz = new Biz('0.0.1', fpm)
  biz.addSubModules('common', common)
  biz.addSubModules('user', user)
  biz.addSubModules('application', application)
  biz.addSubModules('system', system)
  biz.addSubModules('table', table)
  webhook(fpm)
  return biz
}
