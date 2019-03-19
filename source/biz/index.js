const _ = require('lodash')
const application = require('./application')
const user = require('./user')
const system = require('./system')
const faker = require('./faker')

module.exports =  (fpm) =>{
  let biz = fpm.createBiz('0.0.1')
  biz.addSubModules('user', user(fpm))
  biz.addSubModules('application', application(fpm))
  biz.addSubModules('system', system(fpm))
  biz.addSubModules('faker', faker(fpm))
  return biz
}
