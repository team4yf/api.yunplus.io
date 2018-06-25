var should = require("chai").should;
var fpmc = require("yf-fpm-client-js").default;
fpmc.init({ mode: 'DEV', appkey:'123123', masterKey:'123123' });

describe('Function', function(){
  it('test', function(done){
    var query = new fpmc.Query('api_app');
    query.condition({appenvironment: 'product', apptype: 'web', status: '1'})
    .findAndCount()
      .then(function(d){
        console.log(d)
        done();
      }).catch(function(err){
        done(err);
      });
  
  })
})