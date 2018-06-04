var should = require("chai").should;
var fpmc = require("yf-fpm-client-js").default;
fpmc.init({ mode: 'DEV', appkey:'123123', masterKey:'123123' });

describe('Function', function(){
  it('test', function(done){
    var func = new fpmc.Func('faker.getOne');
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