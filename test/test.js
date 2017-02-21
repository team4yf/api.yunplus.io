import fetchData from './fetch'
fetchData('application.checkVersion', { app: 'fpmclient'})
  .then((json) => {
    console.log(json)
  })
  .catch((error) => {
    console.log(error)
  })


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
