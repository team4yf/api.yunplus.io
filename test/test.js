import fetchData from './fetch'
fetchData('appliction.checkVersion', { table: 'api_app'})
  .then((json) => {
    console.log(json)
  })
  .catch((error) => {
    console.log(error)
  })


fetchData('system.show', { table: 'api_app'})
  .then((json) => {
    console.log(json)
  })
  .catch((error) => {
    console.log(error)
  })

fetchData('user.login', { table: 'api_app'})
  .then((json) => {
    console.log(json)
  })
  .catch((error) => {
    console.log(error)
  })
