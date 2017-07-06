import fetchData from './fetch'
// fetchData('application.checkVersion', { app: 'fpmclient'})
//   .then((json) => {
//     console.log(json)
//   })
//   .catch((error) => {
//     console.log(error)
//   })


// fetchData('system.show', { table: 'api_app'})
//   .then((json) => {
//     console.log(json)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// fetchData('user.login', { table: 'api_app'})
//   .then((json) => {
//     console.log(json)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// fetchData('common.get', { table: 'api_app' , id: 1})
//   .then((json) => {
//     console.log(json)
//   })
//   .catch((error) => {
//     console.log(error)
//   })


// fetchData('system.sendMail', { templateId: 3 , to: '1794947912@qq.com', subject: 'test', data: {
//   foo: 'test that'
// }})
//   .then((json) => {
//     console.log(json)
//   })
//   .catch((error) => {
//     console.log(error)
//   })


// fetchData('schedule.start', {method: 'system.show', v: '0.0.1', cron: '* * * * *'})
//   .then((json) => {
//     console.log(json)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// fetchData('schedule.stop', {jobId: 0})
//   .then((json) => {
//     console.log(json)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// fetchData('baidu.push', {})
//   .then((json) => {
//     console.log(json)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// fetchData('baidu.check', {})
//   .then((json) => {
//     console.log(json)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
fetchData('system.sms', {tpl_id: 39012, mobiles: '13770683580', tpl_value: {number: 20}})
  .then((json) => {
    console.log(json)
  })
  .catch((error) => {
    console.log(error)
  })
