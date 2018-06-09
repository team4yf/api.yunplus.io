import _ from 'lodash'
import application from './application'
import user from './user'
import system from './system'
import faker from './faker'
import webhook from './webhook'

export default (fpm) =>{
  let biz = new fpm.createBiz('0.0.1')
  biz.addSubModules('user', user(fpm))
  biz.addSubModules('application', application(fpm))
  biz.addSubModules('system', system(fpm))
  biz.addSubModules('faker', faker(fpm))
  webhook(fpm)
  return biz
}
