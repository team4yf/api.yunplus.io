var should = require("should");
var YF = require("yf-fpm-client-nodejs").default;
YF.init({ appkey:'123123', masterKey:'1b7e5703602b6fce1cae7364ac0f2244', endpoint: 'http://localhost:9991/api' });

describe('Command', function(){
  it('doCommand', function(done){
    var func = new YF.Func('system.doCommand');
    func.invoke({ command: 'dir d:'})
      .then(function(d){
        console.log(d)
        done();
      }).catch(function(err){
        done(err);
      });
  
  })
})