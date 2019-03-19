const _ = require('lodash');
const faker = require('faker');
const debug = require('debug')('faker');

/**
 * 
 * @param {*} fields 
 *  { name: 'name.findName', date: 'name.findName' },
 *  
 */
const generateOne = (fields) =>{
  const generators = getGenerators(fields)
  let one = {}
  _.map(generators, (generator, name) => {
      one[name] = generator()
  })
  return one
}

const generateList = (fields, size) =>{
  const generators = getGenerators(fields)
  debug('%o', generators);
  let list = []
  let one
  for( let i = 0; i < size; i++){
    one = {}
    _.map(generators, (generator, name) => {
        one[name] = generator()
    })
    list.push(one)
  }
  return list
}

const getGenerators = (fields) => {
  let paths
  const list = _.map(fields, (field, name) => {
    paths = field.split('.')
    return { name, generator: faker[paths[0]][paths[1]] }
  })
  let generators = {}
  _.map(list, item => {
      generators[item.name] = item.generator
  })
  return generators
}

module.exports =  (fpm) =>{

return {
    getOne: args => {
      const data = generateOne( _.assign({}, args.fields || {
        name: 'name.findName',
        email: 'internet.email',
        ip: 'internet.ip',
        website: 'internet.url',
      }))
      return{ data }
    },
    getList: args => {
      let list = generateList( _.assign({}, args.fields || {
        name: 'name.findName',
        email: 'internet.email',
        ip: 'internet.ip',
        website: 'internet.url',
      }), args.size || 20)
      return { data: list }
    }
  }
}
