import _ from 'lodash'
import application from './application'
import user from './user'
import system from './system'
import faker from './faker'

export default (fpm) =>{
  let biz = fpm.createBiz('0.0.1')
  biz.addSubModules('user', user(fpm))
  biz.addSubModules('application', application(fpm))
  biz.addSubModules('system', system(fpm))
  biz.addSubModules('faker', faker(fpm))
  return biz
}
