import _ from 'lodash'
import application from './application'
import user from './user'
import system from './system'
import faker from './faker'

export default (fpm) =>{
  let biz = fpm.createBiz('0.0.1')
  biz.addSubModules('user', user)
  biz.addSubModules('application', application)
  biz.addSubModules('system', system)
  biz.addSubModules('faker', faker)
  return biz
}
