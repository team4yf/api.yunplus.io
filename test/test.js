import fetchData from './fetch'
fetchData('system.show', { table: 'api_app'})
  .then((json) => {
    console.log(json)
  })
