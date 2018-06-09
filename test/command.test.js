var should = require("chai").should;
var fpmc = require("yf-fpm-client-js").default;
fpmc.init({ mode: 'DEV', appkey:'123123', masterKey:'123123' });

describe('Function', function(){
  it('test', function(done){
    var func = new fpmc.Func('sms.send');
    func.invoke({
      tpl_id: 39012, // The template Id In Juhe.CN  you can set it At  [https://www.juhe.cn/sms](https://www.juhe.cn/sms)
      mobiles: '13770683580',   // The Phone Numbers
      tpl_value: {number: 'bot foo1 crashed'} 
    })
      .then(function(d){
        console.log(d)
        done();
      }).catch(function(err){
        done(err);
      });
  
  })
  it('test', function(done){
    var func = new fpmc.Func('faker.getOne');
    func.invoke({})
      .then(function(d){
        console.log(d)
        done();
      }).catch(function(err){
        done(err);
      });
  
  })

  it('test', function(done){
    var func = new fpmc.Func('faker.getList');
    func.invoke({fields: {
      address: 'address.citySuffix',
      commerce: 'commerce.product',
      company: 'company.bs',
      database: 'database.collation',
      date: 'date.future',
      finance: 'finance.account',
      hacker: 'hacker.phrase',
      image: 'image.avatar',
      ip: 'internet.ip',
      text: 'lorem.text',
      name: 'name.firstName',
      phone: 'phone.phoneNumber',
      id: 'random.uuid',
      system: 'system.mimeType'
    }})
      .then(function(d){
        console.log(d)
        done();
      }).catch(function(err){
        done(err);
      });
  
  })
})