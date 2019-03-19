const fpmc = require("fpmc-jssdk");
const { DBQuery, Func, init } = fpmc;
const assert = require('assert');

init({ appkey:'123123', masterKey:'123123', endpoint: 'http://api.yunplus.io/api', version: '0.0.1' });

describe('Function', function(){
  it('test', function(done){
    var query = new DBQuery('api_app');
    query.condition({appenvironment: 'product', apptype: 'web', status: '1'})
    .findAndCount()
      .then(function(d){
        console.log(d)
        done();
      }).catch(function(err){
        done(err);
      });
  
  })

  it('System.show', function(done){
    var func = new Func('system.show');
    func.invoke({})
      .then(function(d){
        console.log(d)
        done();
      }).catch(function(err){
        done(err);
      });
  
  })
})