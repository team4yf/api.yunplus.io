import _ from 'lodash'
import { Biz }  from 'yf-fpm-server'
import application from './application'
import user from './user'
import system from './system'
import faker from './faker'

export default (fpm) =>{
  let biz = new Biz('0.0.1', fpm)
  biz.addSubModules('user', user)
  biz.addSubModules('application', application)
  biz.addSubModules('system', system)
  biz.addSubModules('faker', faker)
  return biz
}
