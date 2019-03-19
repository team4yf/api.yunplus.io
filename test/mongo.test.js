const fpmc = require("fpmc-jssdk");
const { MGObject, MGQuery, init } = fpmc;
const assert = require('assert');

init({ appkey:'123123', masterKey:'123123', endpoint: 'http://api.yunplus.io/api', version: '0.0.1' });

describe('Function', function(){
  it('test', function(done){
    var obj = new MGObject('foo_db', 'bar');
    obj.set({
      name: 't1',
      val: '0.1',
    })
    obj.create().then(function(o){
      console.log(o)
      done();
    }).catch(function(err){
      console.log(err)
      done(err);
    });
  
  })
})