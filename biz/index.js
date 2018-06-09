import _ from 'lodash'
import application from './application'
import user from './user'
import system from './system'
import faker from './faker'
import webhook from './webhook'

export default (fpm) =>{
  let biz = new fpm.createBiz('0.0.1')
  biz.addSubModules('user', user)
  biz.addSubModules('application', application)
  biz.addSubModules('system', system)
  biz.addSubModules('faker', faker)
  webhook(fpm)
  return biz
}
