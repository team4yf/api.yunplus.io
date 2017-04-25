var should = require("should");
var YF = require("yf-fpm-client-nodejs").default;
YF.init({ appkey:'123123', masterKey:'1b7e5703602b6fce1cae7364ac0f2244', endpoint: 'http://localhost:9991/api' });

describe('Table', function(){
  it('Table drop', function(done){
    var func = new YF.Func('table.drop');
    func.invoke({ name: 'test_table2'})
      .then(function(d){
        console.log(d)
        done();
      }).catch(function(err){
        done(err);
      });
  
  })

  it('Table create', function(done){
    var func = new YF.Func('table.create');
    func.invoke({ name: '_sys_udf_table',
       cols: [{
         name: 'name',
         type: 'VARCHAR(200)',
         isNull: false,
       },
       {
         name: 'title',
         type: 'VARCHAR(300)',
       },{
         name: 'ext',
         type: 'INT(16)',
         isNull: false,
         default: '12',
         comment: 'extract',
       }] }).then(function(d){
      console.log(d)
      done();
    }).catch(function(err){
      done(err);
    });
  });

})