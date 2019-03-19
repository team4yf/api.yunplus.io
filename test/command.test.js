const fpmc = require("fpmc-jssdk");
const { Func, init } = fpmc;
const assert = require('assert');

init({ appkey:'123123', masterKey:'123123', endpoint: 'http://localhost:9999/api', version: '0.0.1' });

describe('Function', function(){
  it('test', function(done){
    var func = new Func('sms.send');
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
    var func = new Func('faker.getOne');
    func.invoke({fields: {
      category: 'lorem.word',
      title: 'lorem.slug',
      date: 'date.future',
      image: 'image.avatar',
      summary: 'lorem.text',
      author: 'name.firstName',
      id: 'random.uuid',
    }})
      .then(function(d){
        console.log(d)
        done();
      }).catch(function(err){
        done(err);
      });
  
  })

  it('test', function(done){
    var func = new Func('faker.getList');
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